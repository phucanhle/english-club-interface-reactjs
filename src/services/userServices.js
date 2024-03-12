import axios from "axios";
const BASE_URL = "http://localhost:3000";

const userService = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${BASE_URL}/users/login`, { email, password });
            return response.data;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    },
    register: async (user) => {
        const response = await axios.post(`${BASE_URL}/users/register`, user);
        return response.data;
    },
    getClasses: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/topics`);
            return response.data;
        } catch (error) {
            console.error("Error load classes:", error);
            throw error;
        }
    },
    getClassOfStudent: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/topics/student/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error get classes:", error);
            throw error;
        }
    },
    getCountedStudent: async (idTopics) => {
        try {
            const response = await axios.get(`${BASE_URL}/topics/count/${idTopics}`);
            return response.data;
        } catch (error) {
            console.error("Error get classes:", error);
            throw error;
        }
    },
    getNotification: async (userId) => {
        const result = await axios.get(`${BASE_URL}/notifications/${userId}`);
        console.log(userId);
        return result.data;
    },
    getNotificationOfTeacher: async (teacherId) => {
        const result = await axios.get(`${BASE_URL}/notifications/teachers/${teacherId}`);
        return result.data;
    },
    getAssignments: async (userId) => {
        const result = await axios.get(`${BASE_URL}/assignments/${userId}`);
        return result.data;
    },
    getAssignmentsOfTeacher: async (teacherId) => {
        const result = await axios.get(`${BASE_URL}/assignments/teacher/${teacherId}`);
        return result.data;
    },
    getStudentInTeacherClass: async (teacherId, topicId) => {
        const result = await axios.get(`${BASE_URL}/topics/teacher/${teacherId}/topic/${topicId}`);
        return result.data;
    },
    getStudentsDontHaveScore: async (teacherId) => {
        const result = await axios.get(`${BASE_URL}/topics/teacher-score/${teacherId}`);
        return result.data;
    },
    getCourses: async () => {
        const response = await axios.get(`${BASE_URL}/courses`);
        return response.data;
    },
    getStudentsSoldCoursesBySale: async (saleId) => {
        const response = await axios.get(`${BASE_URL}/courses/sale/${saleId}`);
        return response.data;
    },
    updateUser: async (userId, userData) => {
        const response = await axios.patch(`${BASE_URL}/users/update/${userId}`, userData);
        return response.data;
    },
    createClass: async (lesson) => {
        const result = await axios.post(`${BASE_URL}/topics`, lesson);
        console.log(result);
    },
    bookingClass: async (userId, topicId) => {
        const formatDate = (dateObj) => {
            const day = String(dateObj.getDate()).padStart(2, "0");
            const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            const year = dateObj.getFullYear();
            return `${day}/${month}/${year}`;
        };

        const date = new Date();
        const formattedDate = formatDate(date);

        const response = await axios.post(`${BASE_URL}/topics/booking`, {
            userId,
            topicId,
            bookingDate: formattedDate,
        });
        return response.status;
    },
    takeAttendance: async (topicId, userId, attended) => {
        const response = await axios.post(`${BASE_URL}/topics/update-attended`, {
            topicId: topicId,
            userId: userId,
            attended: attended,
        });

        if (response.status === 200) {
            console.log("Cập nhật thành công");
            return response.data;
        } else {
            console.error("Có lỗi xảy ra khi cập nhật điểm danh");
            return null;
        }
    },
    sendNotifi: async (userSent, userReceivedId, title, content) => {
        const formatDate = (dateObj) => {
            const day = String(dateObj.getDate()).padStart(2, "0");
            const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            const year = dateObj.getFullYear();
            return `${day}/${month}/${year}`;
        };

        const date = new Date();
        const formattedDate = formatDate(date);

        const response = await axios.post(`${BASE_URL}/notifications/`, {
            title: title,
            userSent: userSent,
            userReceivedId: userReceivedId,
            date: formattedDate,
            content: content,
        });
        console.log("Thêm thành công");
        return response.data;
    },
    sendAssignment: async (assignment) => {
        const response = await axios.post(`${BASE_URL}/assignments`, assignment);
        return response.data;
    },
    saveScore: async (score) => {
        const response = await axios.post(`${BASE_URL}/topics/update-score`, score);
        return response.data;
    },
};
export default userService;
