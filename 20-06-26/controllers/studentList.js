const studentData = [
    {
        userId: 1,
        name: 'Harsh Waghela',
        email: 'harsh123@gmail.com',
        password: 'harsh123'
    },
    {
        userId: 2,
        name: 'Krishna Kalathiya',
        email: 'krishna123@gmail.com',
        password: 'krishna123'
    },
    {
        userId: 3,
        name: 'Vivek Kalathiya',
        email: 'vivek123@gmail.com',
        password: 'vivek123'
    }
]

// Dsplay student

export const home = (req, res) => {
    return res.render('index', { students: studentData })
}

// Add student

export const addPage = () => {

}

// Insert student

export const insertData = () => {

}

// Delete student

export const deleteData = () => {

}

// Edit student

export const editData = () => {

}

// Update student

export const updateData = () => {

}