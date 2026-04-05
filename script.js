// بيانات الكورسات (ضع روابطك هنا)
const coursesData = {
    'fiqh': {
        title: 'كورس الفقه الإسلامي',
        lessons: [
            { title: 'الدرس الأول: مقدمة في علم الفقه', url: 'v1.mp4' }, // ضع رابط يوتيوب هنا
            { title: 'الدرس الثاني: الطهارة والصلاة', url: '' },
            { title: 'الدرس الثالث: أحكام الصيام', url: '' }
        ]
    },
    'seerah': {
        title: 'كورس السيرة النبوية',
        lessons: [
            { title: 'الدرس الأول: المولد والنشأة', url: '' },
            { title: 'الدرس الثاني: البعثة النبوية', url: '' }
        ]
    },
    'aqidah': {
        title: 'كورس العقيدة',
        lessons: [
            { title: 'الدرس الأول: أركان الإيمان', url: '' },
            { title: 'الدرس الثاني: توحيد الألوهية', url: '' }
        ]
    }
};

const modal = document.getElementById("videoModal");
const mainVideo = document.getElementById("mainVideo");
const lessonList = document.getElementById("lessonList");
const modalTitle = document.getElementById("modalTitle");

// فتح الكورس وعرض قائمة الدروس
function openCourse(courseKey) {
    const course = coursesData[courseKey];
    modalTitle.innerText = course.title;
    lessonList.innerHTML = ""; // مسح القائمة القديمة

    course.lessons.forEach((lesson, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-play-circle"></i> ${lesson.title}`;
        li.onclick = () => {
            playVideo(lesson.url, li);
        };
        lessonList.appendChild(li);
        
        // تشغيل أول فيديو تلقائياً عند فتح الكورس
        if(index === 0) playVideo(lesson.url, li);
    });

    modal.style.display = "block";
}

// تشغيل الفيديو المختار
function playVideo(url, element) {
    // تحديث الرابط (يجب تحويل رابط يوتيوب العادي إلى رابط embed)
    // مثال: https://www.youtube.com/embed/فيديو_آيدي
    mainVideo.src = url;

    // تمييز الدرس الحالي في القائمة
    const allItems = lessonList.querySelectorAll("li");
    allItems.forEach(item => item.classList.remove("active"));
    element.classList.add("active");
}

// إغلاق النافذة
function closeModal() {
    modal.style.display = "none";
    mainVideo.src = ""; // إيقاف الفيديو عند الإغلاق
}

// إغلاق عند الضغط خارج النافذة
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}


function toggleSocial() {
  document.querySelector(".social-float").classList.toggle("active");
}
