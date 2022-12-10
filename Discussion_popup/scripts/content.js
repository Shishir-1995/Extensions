const notificationList = document
	.querySelector(".divide-y")
	.getElementsByTagName("li");

const newNotification = document.querySelector(".max-w-7x1");
// const newBar = document.querySelector(".bg-indigo-600");

console.log(newNotification);
// console.log(newBar);

function checkNotification() {
	// window.location.reload();

	if (notificationList && notificationList.length) {
		Notification.requestPermission().then(() => {
			var notification = new Notification("Masai Notification", {
				icon: "https://www.masaischool.com/img/navbar/logo.svg",
				body: "New Discussion raise in LMS",
			});
			notification.onclick = function () {
				window.open("https://course.masaischool.com/");
			};
		});

		const title = document.querySelector("title");
		title.innerText = "(1)*";
	} else {
		console.log("Discussion check is running...");
	}
}

setInterval(checkNotification, 2000);

// checkNotification();
