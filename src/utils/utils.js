// const storageRestaurant = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./src/uploads/restaurantImages");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const storageUser = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./src/uploads/userImages");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const storageBanner = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./src/uploads/userImages");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// // const fileFilter = (req, file, cb) => {
// //   if (file.mimetype === "image/jpg" || file.mimetype === "image/png") {
// //     cb(null, true);
// //   } else {
// //     cb(null, false);
// //   }
// // };

// exports.uploadRestaurant = multer({ storageRestaurant });
// exports.uploadUser = multer({ storageUser });
// exports.uploadBanner = multer({ storageBanner });
