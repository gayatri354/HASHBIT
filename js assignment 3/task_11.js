// Input data
const data = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Function to calculate average
function calculateAverages(data) {
    const result = {};

    Object.keys(data).forEach(student => {
        const subjects = data[student];
        const subjectValues = Object.values(subjects);
        const total = subjectValues.reduce((sum, value) => sum + value, 0);
        const average = total / subjectValues.length;

        result[student] = {
            average: average
        };
    });

    return result;
}

// Get the output
const output = calculateAverages(data);
console.log(output);