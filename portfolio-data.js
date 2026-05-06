// This file contains the data for the portfolio gallery.
// To add a new image:
// 1. Upload the image to the corresponding folder in 'images/portfolio/'.
// 2. Add a new object to the 'portfolioData' array below.

const portfolioCategories = [
    {
        id: "stay",
        name: "숙박 공간",
        subcategories: [
            { id: "gangneung_arumdeuri", name: "강릉 아름드리" },
            { id: "suwon_yeominjae", name: "수원 여민재" },
            { id: "wangsimni_airbnb", name: "왕십리 에어비앤비" },
            { id: "yeoksam_airbnb", name: "역삼 에어비앤비" }
        ]
    },
    {
        id: "rental",
        name: "임대 공간",
        subcategories: [
            { id: "yongsan_rental", name: "용산 단기임대" },
            { id: "seogyodong_rental", name: "서교동 단기임대" }
        ]
    },
    {
        id: "living",
        name: "주거 공간",
        subcategories: [
            { id: "anyang_apt", name: "안양 59㎡ APT" },
            { id: "nowon_apt", name: "노원 59㎡ APT" },
            { id: "bangbae_apt", name: "방배 125㎡ APT" }
        ]
    }
];

const portfolioData = [
    // 수원 여민재
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "1.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "2.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "3.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "4.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "5.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "6.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "7.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "8.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "9.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "10.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "11.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "12.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "13.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "14.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "15.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "16.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "17.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "18.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "19.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "20.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "21.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "22.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "23.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "24.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "25.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "26.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "27.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "28.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "29.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "30.jpg" },
    { projectId: "suwon_yeominjae", title: "수원 여민재", filename: "31.png" },

    // 왕십리 에어비앤비
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "1.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "2.JPG" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "3.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "4.JPG" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "5.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "6.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "7.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "8.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "9.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "10.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "11.jpg" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "12.JPG" },
    { projectId: "wangsimni_airbnb", title: "왕십리 에어비앤비", filename: "13.jpg" },

    // 용산 단기임대
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "1.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "2.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "3.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "4.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "5.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "6.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "7.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "8.jpg" },
    { projectId: "yongsan_rental", title: "용산 단기임대", filename: "9.jpg" },

    // 서교동 단기임대
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "1.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "2.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "3.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "4.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "5.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "6.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "7.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "8.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "9.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "10.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "11.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "12.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "13.jpg" },
    { projectId: "seogyodong_rental", title: "서교동 단기임대", filename: "14.jpg" },

    // 강릉 아름드리
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "1.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "2.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "3.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "4.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "5.jpg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "6.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "7.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "8.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "9.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "10.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "11.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "12.jpeg" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "13.JPG" },
    { projectId: "gangneung_arumdeuri", title: "강릉 아름드리", filename: "14.png" },

    // 안양 59㎡ APT
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "1.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "2.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "3.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "4.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "5.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "6.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "7.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "8.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "9.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "10.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "11.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "12.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "13.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "14.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "15.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "16.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "17.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "18.jpg" },
    { projectId: "anyang_apt", title: "안양 59㎡ APT", filename: "19.jpg" },

    // 노원 59㎡ APT
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "1.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "2.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "3.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "4.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "5.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "6.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "7.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "8.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "9.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "10.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "11.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "12.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "13.jpg" },
    { projectId: "nowon_apt", title: "노원 59㎡ APT", filename: "14.jpg" },

    // 역삼 에어비앤비
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "1.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "2.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "3.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "4.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "5.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "6.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "7.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "8.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "9.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "10.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "11.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "12.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "13.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "14.jpg" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "16.JPG" },
    { projectId: "yeoksam_airbnb", title: "역삼 에어비앤비", filename: "17.jpg" },

    // 방배 125㎡ APT
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "1.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "2.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "3.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "4.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "5.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "6.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "7.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "8.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "9.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "10.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "11.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "12.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "13.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "14.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "15.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "16.jpg" },
    { projectId: "bangbae_apt", title: "방배 125㎡ APT", filename: "17.jpg" },
];
