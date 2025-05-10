
# SLIIT GPA Calculator

The **SLIIT GPA Calculator** is a web application designed to help **SLIIT** students easily calculate their Grade Point Average (GPA). Developed using **Vite**, **React**, and **JavaScript**, the tool offers a simple, intuitive, and responsive interface for quick and accurate GPA calculations.

This tool is aimed at simplifying the GPA calculation process, ensuring that students can track and manage their academic performance efficiently.

---

## Features

* **Easy GPA Calculation**: Students can input their grades and course credits to calculate their GPA.
* **Responsive Interface**: Designed to work seamlessly across desktop and mobile devices.
* **Instant Calculation**: Real-time GPA calculation as students enter their grades and credits.
* **Customizable**: Adapt the GPA calculation formula to fit your university's grading system.
* **Clear UI**: The simple and user-friendly interface makes it easy for students to navigate.

---

## Tech Stack

* **Vite**: Next-generation build tool for fast development.
* **React**: JavaScript library for building interactive UIs.
* **JavaScript**: Core language used for dynamic calculations and handling user input.
* **CSS**: For styling the application and making it responsive.
* **HTML5**: Standard markup language used for the structure of the app.

---

## Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (LTS version recommended)
* **npm** (Node package manager)

---

## Installation

### Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/SLIIT-GPA-Calculator.git
```

### Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd SLIIT-GPA-Calculator
npm install
```

This will install all the necessary dependencies listed in the `package.json` file.

### Run the Project

To start the development server and view the application locally:

```bash
npm run dev
```

This will start the app at `http://localhost:3000` in your browser.

---

## Usage

1. **Enter Course Data**: Input the course grades and corresponding credit values.
2. **Calculate GPA**: Click the "Calculate GPA" button, and the GPA will be displayed instantly.
3. **Track Your Progress**: View your GPA as you update your grades or add new courses.
4. **Responsive Design**: The app works seamlessly on both mobile and desktop devices.

---

## Project Structure

Here is a breakdown of the project structure:

```bash
SLIIT-GPA-Calculator/
├── public/
│   ├── index.html         # Main HTML file
│   └── assets/            # Folder for any images or assets used in the app
├── src/
│   ├── components/        # React components for the GPA form and result display
│   ├── App.js             # Main component where the GPA calculation logic is handled
│   ├── styles.css         # Global CSS file for styling
│   └── index.js           # Main entry point of the application
├── package.json           # Project metadata and dependencies
├── .gitignore             # Git ignore configuration
└── README.md              # Project documentation
```

---

## Libraries Used

* **React**: A JavaScript library for building user interfaces.
* **Vite**: A modern build tool for fast development.
* **CSS**: For styling the application.


---

## Contributing

We welcome contributions to improve the **SLIIT GPA Calculator**. If you'd like to contribute, please follow the steps below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a Pull Request.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

* **React** for making front-end development efficient and fast.
* **Vite** for providing a fast build and development environment.
* **SLIIT** for inspiring the project and helping students manage their academic progress.

---


## Future Improvements

* **User Authentication**: Allow students to save and track their GPA history over time.
* **Multiple Semester Support**: Add functionality to calculate GPA for multiple semesters and display trends.
* **Export Feature**: Enable students to export their GPA results in PDF or CSV format.
* **Dark Mode**: Add a dark mode theme for better user experience at night.

