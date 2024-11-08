const texts = [
	["Hello, 这是我们软件理论与工程课程的实践项目", ""],
	["这个项目叫同伴教学平台", "这个项目"],
	["包括管理员后台模块", "这个项目包括"],
	["学生选课答题观看视频模块", ""],
	["还包括教师发布与成绩分析模块", "还"],
	["能以图表的形式查询学生小测成绩状态", ""],
	["欢迎测试使用！^_^", ""]
];
const typingDiv = document.getElementById('typing');
let textIndex = 0;
let charIndex = 0;
let isAdding = true;
let delay = 100;

function playTyping() {
	if (isAdding) {
		if (charIndex <= texts[textIndex][0].length) {
			typingDiv.textContent += texts[textIndex][0][charIndex++];
			delay = Math.max(30, 120 - 90 * charIndex / texts[textIndex][0].length);  // 打字速度
		}
		if (charIndex === texts[textIndex][0].length) {
			isAdding = false;
			delay = 1500; // 等待一段时间后开始删除
		}
	} else {
		if (typingDiv.textContent !== texts[textIndex][1]) {
			typingDiv.textContent = typingDiv.textContent.substring(0, texts[(textIndex + texts.length - 1) % texts.length][1].length + charIndex--);
			delay = 50;  // 删除速度更快
		}
		if (typingDiv.textContent === texts[textIndex][1] || typingDiv.textContent === "") {
			isAdding = true;
			textIndex = (textIndex + 1) % texts.length; // 循环文本数组
			charIndex = 0; // 重置字符索引
		}
	}
	setTimeout(playTyping, delay);
}

document.addEventListener('DOMContentLoaded', function () {
	const themeToggle = document.getElementById('theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', function () {
			document.body.classList.toggle('dark-mode');
			const buttons = document.querySelectorAll('.button');
			buttons.forEach(button => {
				button.classList.toggle('dark-mode');
			});
		});
	}

	// Rest of your playTyping code here
	playTyping();
});
