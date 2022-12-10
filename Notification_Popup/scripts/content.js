const newNotification = document.querySelector(".max-w-7x1");

console.log(newNotification);

function checkNotification() {
	// window.location.reload();

	if (newNotification) {
		Notification.requestPermission().then(() => {
			var notification = new Notification("Masai Notification", {
				icon: "https://www.masaischool.com/img/navbar/logo.svg",
				body: "New Notification raise in LMS",
			});
			notification.onclick = function () {
				window.open("https://course.masaischool.com/");
			};
		});

		const title = document.querySelector("title");
		title.innerText = "(1)*";
	} else {
		console.log("Notification  check is running...");
	}
}

setInterval(checkNotification, 3000);
