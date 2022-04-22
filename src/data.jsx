const olddata = [
	{
		"school": "Xyz school",
		"type": "3D",
		"name": "3D-художник по персонажам",
		"cost": "164 500",
		"duration": "11,5 месяцев",
		"professionalism": "Продвинутый",
		"url": "https://www.school-xyz.com/3d-khudozhnik-po-personazham"
	},
	{
		"school": "Xyz school",
		"type": "3D",
		"name": "3D-художник ",
		"cost": "175 000",
		"duration": "14 месяцев",
		"professionalism": "Продвинутый",
		"url": "https://www.school-xyz.com/professional-3d-artist"
	},
	{
		"school": "Xyz school",
		"type": "3D",
		"name": "3D-художник по оружию",
		"cost": "253 000",
		"duration": "15 месяцев",
		"professionalism": "Профессионал",
		"url": "https://www.school-xyz.com/3d-khudozhnik-po-oruzhiyu"
	},
	{
		"school": "Xyz school",
		"type": "3D",
		"name": "CGI-художник по персонажам",
		"cost": "324 588",
		"duration": "29 месяцев",
		"professionalism": "Профессионал",
		"url": "https://www.school-xyz.com/cgi-khudozhnik-po-personazham"
	},
	{
		"school": "Xyz school",
		"type": "2D",
		"name": "Концепт-художник",
		"cost": "289 490",
		"duration": "14 месяцев",
		"professionalism": "Новичек",
		"url": "https://www.school-xyz.com/professional-concept-artist"
	},
	{
		"school": "Xyz school",
		"type": "2D",
		"name": "Концепт-Арт с Дмитрием Клюшкиным",
		"cost": "125 638",
		"duration": "6 месяцев",
		"professionalism": "Профессионал",
		"url": "https://www.school-xyz.com/concept-art"
	},
	{
		"school": "Xyz school",
		"type": "2D",
		"name": "Анатомия игровых персонажей",
		"cost": "25 800",
		"duration": "1,5 месяца",
		"professionalism": "Новичек",
		"url": "https://www.school-xyz.com/anatomiya-igrovykh-personazhej"
	},
	{
		"school": "Xyz school",
		"type": "2D",
		"name": "Основы иллюстрации ",
		"cost": "125 638",
		"duration": "6 месяцев",
		"professionalism": "Новичек",
		"url": "https://www.school-xyz.com/osnovy-illyustracii"
	},
	{
		"school": "Xyz school",
		"type": "2D",
		"name": "Concept Art",
		"cost": "107 071",
		"duration": "5 месяцев",
		"professionalism": "Новичек",
		"url": "https://www.school-xyz.com/conceptart"
	},
	{
		"school": "Smirnov school",
		"type": "2D",
		"name": "Основы CG рисунка",
		"cost": "11 500",
		"duration": "2,5 недели",
		"professionalism": "Новичек",
		"url": "https://smirnovschool.com/cgb"
	},
	{
		"school": "Smirnov school",
		"type": "2D",
		"name": "Основы создания персонажей",
		"cost": "23 500",
		"duration": "1 месяц",
		"professionalism": "Новичек",
		"url": "https://smirnovschool.com/chb"
	},
	{
		"school": "Smirnov school",
		"type": "2D",
		"name": "Основы создания окружения",
		"cost": "23 500",
		"duration": "1 месяц",
		"professionalism": "Новичек",
		"url": "https://smirnovschool.com/enb"
	},
	{
		"school": "Smirnov school",
		"type": "3D",
		"name": "3D персонаж",
		"cost": "35 000",
		"duration": "1,5 месяца",
		"professionalism": "Новичек",
		"url": "https://smirnovschool.com/3dc"
	},
	{
		"school": "Smirnov school",
		"type": "3D",
		"name": "Основы Blender",
		"cost": "17 000",
		"duration": "4 недели",
		"professionalism": "Новичек",
		"url": "https://smirnovschool.com/bb"
	},
	{
		"school": "Smirnov school",
		"type": "2D",
		"name": "Концепт-арт персонажей",
		"cost": "50 000",
		"duration": "3,5 месяца",
		"professionalism": "Продвинутый",
		"url": "https://smirnovschool.com/chca"
	},
	{
		"school": "Smirnov school",
		"type": "2D",
		"name": "Концепт-арт окружения",
		"cost": "52 000",
		"duration": "3,5 месяца",
		"professionalism": "Продвинутый",
		"url": "https://smirnovschool.com/eca"
	},
	{
		"school": "Skillbox",
		"type": "2D",
		"name": "Коммерческий иллюстратор",
		"cost": "360 000",
		"duration": "16 месяцев",
		"professionalism": "Новичек",
		"url": "https://skillbox.ru/course/profession-commercial-illustrator-2/"
	},
	{
		"school": "Skillbox",
		"type": "2D",
		"name": "2D-художник",
		"cost": "300 000",
		"duration": "12 месяцев",
		"professionalism": "Новичек",
		"url": "https://skillbox.ru/course/profession-2d-artist/"
	},
	{
		"school": "Skillbox",
		"type": "2D",
		"name": "Концепт-художник с нуля до PRO",
		"cost": "310 000",
		"duration": "20 месяцев",
		"professionalism": "Новичек",
		"url": "https://skillbox.ru/course/profession-concept-art-pro/"
	},
	{
		"school": "Skillbox",
		"type": "3D",
		"name": "3D-художник",
		"cost": "144 000",
		"duration": "12 месяцев",
		"professionalism": "Новичек",
		"url": "https://skillbox.ru/course/3d-artist/"
	},
	{
		"school": "SkillFactory",
		"type": "3D",
		"name": "3D Artist",
		"cost": "158 000",
		"duration": "15 месяцев",
		"professionalism": "Новичек",
		"url": "https://contented.ru/edu/3d-artist?utm_source=skillfactory"
	}
]

export const data = JSON.parse(olddata)