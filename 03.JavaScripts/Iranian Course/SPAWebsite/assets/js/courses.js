const sortedCoursesBox = document.querySelector('.shop-top-bar-right')

sortedCoursesBox.addEventListener('click', () => {
    const sortedCoursesList  = document.querySelector('.sorted-courses__list ')
    sortedCoursesList.classList.toggle('active')
})