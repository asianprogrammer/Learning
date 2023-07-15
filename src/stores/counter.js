import { defineStore } from "pinia";

export const useStudents = defineStore('students', {
    state: ()=> ({
        students: [
            {
                name: "Jasmine Sultana",
                profile: 'PRO6.jpg',
                status: '2464 Royal Safa, Jeddah Safa Dist'
            },
            {
                name: "Northern Lamar",
                profile: 'PRO7.jpg',
                status: 'Malaz Dist,  Riyadh Malaz Dist'
            },
            {
                name: "Mujahid Al-Adhar",
                profile: 'PRO11.jpg',
                status: "Alkhobar, P.O.Box : 73941, Alkhobar Khobar"
            }
        ],
        classes: [
            {
                title: "Mathematics",
                date: '5/19/12',
                profile: 'PRO10.jpg',
                teacher: 'Omar Al-Mansouri',
                location: '42 Khalifa Street, Dubai, United Arab Emirates',
                about: `Natural Numbers and scales \n 1. Natural Number \n 2. Segment. The Length of the segment. Triangle.
                3. Plane. Straight. Ray. \n 4. Scales and coordinates.`
            },
            {
                title: "Physics",
                date: '2/11/12',
                profile: 'PRO2.jpg',
                teacher: 'Hassan Abdel Rahman',
                location: '15 Tahrir Square, Cairo, Egypt',
                about: `I need to revise Mechanics and Kinematics Conservation laws.`
            },
            {
                title: 'Mathematics',
                date: '1/28/17',
                profile: 'PRO9.jpg',
                teacher: 'Ali Abdullah',
                location: '7 Al-Hamra Avenue, Muscat, Oman',
                about: `Signs of equality of triangles. Median, bisector and hight of triangle.`
            }
        ],
        finders: [
            {
                title: 'Need a math teacher for my child',
                name: 'Hamza Al-Hashemi',
                profile: 'PRO.jpg',
                location: '55 Al-Masjid Street, Doha, Qatar',
                about: "Need to explain concepts such as Quadratic equations and Vieta's theorem."
            },
            {
                title: 'Online classes for students (Grade 6-8)',
                name: 'Karim Nassar',
                profile: 'PRO12.jpg',
                location: '18 Al-Souq Road, Beirut, Lebanon',
                about: 'Lessons in online school "Way", groups of 10 people are assumed. Topics: Square root; Square roots of a non-negative number; Quadratic equations; Linear function; Systems of two linear equations in two variables.'
            }
        ]
    })
})