# AI-Powered Image Enhancer

![AI Image Enhancer Banner](https://i.imgur.com/placeholder-for-your-banner.png)

A modern web application that uses AI to enhance and upscale your images in seconds. Built with React, Vite, and the PicWish API.

## ✨ Features

- **One-Click Image Enhancement**: Upload any image and get an AI-enhanced version instantly
- **Side-by-Side Comparison**: View your original and enhanced images together
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Real-time Processing**: Watch as your image is enhanced in real-time

## 🚀 Demo

[Live Demo](https://your-demo-link-here.com) - Add your deployed application link here

![Demo GIF](https://i.imgur.com/placeholder-for-your-demo.gif)

## 🛠️ Technologies Used

- **Frontend**: React 19, TailwindCSS
- **Build Tool**: Vite
- **API Integration**: Axios
- **Image Enhancement**: PicWish API
- **Styling**: TailwindCSS
- **Code Quality**: ESLint

## 📋 Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn
- PicWish API key (get one at [PicWish](https://picwish.com/))

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/AI-Powered-Image-Enhancer.git
   cd AI-Powered-Image-Enhancer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your PicWish API key:
   ```
   VITE_PICWISH_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🔍 Usage

1. Click on the upload area or drag and drop an image file
2. Wait a few seconds while the AI processes your image
3. View the enhanced image side-by-side with your original
4. Download the enhanced image (feature to be added)

## 📝 How It Works

The application uses the PicWish API to enhance images. Here's the process:

1. User uploads an image through the UI
2. The image is sent to the PicWish API
3. The API processes the image using AI algorithms
4. The enhanced image is returned and displayed to the user

## 🔌 API Integration

This project uses the PicWish API for image enhancement. The integration is handled in `src/utils/enhanceImageApi.js`.

Key API endpoints used:
- `POST /api/tasks/visual/scale` - Upload an image for enhancement
- `GET /api/tasks/visual/scale/{task_id}` - Retrieve the enhanced image

## 📁 Project Structure

```
image-enhancer/
├── public/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── ImagePreview.jsx
│   │   ├── ImageUpload.jsx
│   │   └── Loading.jsx
│   ├── utils/
│   │   └── enhanceImageApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🧪 Running Tests

```bash
npm run test
# or
yarn test
```

## 🚀 Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the production-ready files.

## 🔮 Future Enhancements

- Add download functionality for enhanced images
- Implement image format conversion options
- Add more AI enhancement options (colorization, background removal, etc.)
- User accounts to save enhancement history
- Batch processing for multiple images

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [PicWish](https://picwish.com/) for providing the image enhancement API
- [React](https://reactjs.org/) for the UI library
- [Vite](https://vitejs.dev/) for the build tool
- [TailwindCSS](https://tailwindcss.com/) for styling

## 📧 Contact

JayCode - [Your Email or Social Media]

Project Link: [https://github.com/your-username/AI-Powered-Image-Enhancer](https://github.com/your-username/AI-Powered-Image-Enhancer)

---

Made with ❤️ by JayCode
