export interface IProfileCardProps {
	id: string
	role: "Кандидат" | "Стажёр" | "Выпускник" | "Куратор" | "Наставник" | "Кадровый специалист"
	roleClass: "aspirant" | "intern" | "alumnus" | "moderator" | "mentor" | "employee"
}