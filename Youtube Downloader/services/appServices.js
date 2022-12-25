const ytdl = require("ytdl-core");

exports.homeRoute = (req, res) => {
  res.render("home", {
    title: "YT downloader | home page",
  });
};

exports.downloadRoute = async (req, res) => {
	try {
		  const url = req.query.videourl;
			const videoId = ytdl.getVideoID(url);
			const info = await ytdl.getInfo(`${url}`);
			const inforamtion = info.formats.sort((a, b) => {
				return a.mimeType < b.mimeType;
			});

			let audioVideo = [];
			inforamtion.forEach((video) => {
				if (video.hasVideo && video.hasAudio) {
					audioVideo.push(video);
				}
			});

			res.render("download", {
				title: "YT downloader | download page",
				url: "https://www.youtube.com/embed/" + videoId,
				info: audioVideo,
			});
	} catch(err) {
		res.status(404).json({
			status: "fail",
			message: err.message
		})
	}
};


exports.aboutRoute = (req, res) => {
  res.render("about", {
    title: "YT downloader | about page",
  });
};

exports.serviceRoute = (req, res) => {
  res.render("service", {
    title: "YT downloader | service page",
  });
};

exports.contactRoute = (req, res) => {
  res.render("contact", {
    title: "YT downloader | contact page",
  });
};
