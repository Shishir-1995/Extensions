console.log("Is it working ?");

let checkTime = false;
function checkNotification() {
	const newNotificationBanner = document.querySelector(".ml-3 > span");

	if (newNotificationBanner) {
		let newMessage = newNotificationBanner.innerText.split(" ");

		let numOfMessage = newMessage.pop();

		const unreadMessage = newMessage.join(" ");

		if (
			unreadMessage == "You have unread notifications" &&
			checkTime == false
		) {
			checkTime = true;

			Notification.requestPermission().then(() => {
				newMessage.push(numOfMessage);
				var notification = new Notification("LMS Notification", {
					icon: "https://www.masaischool.com/img/navbar/logo.svg",
					body: newMessage.join(" "),
				});
				notification.onclick = function () {
					clearInterval(intervalCheck);
					checkTime = false;
					window.open("https://course.masaischool.com/");
				};
			});
		} else {
			console.log("newNotification");
		}
	} else {
		console.log("check is running");
	}
}

let intervalCheck = setInterval(checkNotification, 3000);
