# PlantPal
A web app to help plant lovers manage and track their plants' care activities.
<div align="center">
 

  <h1 align="center">🌱 PlantPal - Smart Plant Care Assistant</h1>

  <p align="center">
    A web application designed to help plant enthusiasts easily track and manage their plant care activities.
    <br />
    <a href="https://github.com/H1PP0-G/PlantPal"><strong>Explore the docs »</strong></a>
    <br />


---

##  About The Project

PlantPal is a clean, user-friendly front-end web application designed to solve the common challenges faced by plant lovers. It allows users to visually monitor the watering and sunlight status of each plant, log care activities, and ensure their green companions receive the best possible care.

This project serves as a practical assessment for the **ISYS3001 - Managing Software Development** course. It is not only a functional application but also a comprehensive showcase of modern software development management practices, including version control, branching strategies, continuous integration, and procurement management.

##  Preview

<!-- Make sure this path is correct. You'll need to create a `screenshots` folder in your repo and upload your image. -->
![PlantPal Application Screenshot](https://raw.githubusercontent.com/H1PP0-G/PlantPal/main/screenshots/demo.png)

*A user interface showcasing the plant status cards and interactive features.*

---

##  Built With

This project is built with a standard modern front-end tech stack to ensure an efficient development workflow and a great user experience.

*   ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
*   ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
*   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
*   ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
*   ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

##  Getting Started

To get a local copy up and running, please follow these simple steps.

### **Prerequisites**

Ensure you have the following software installed on your machine:
*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Git](https://git-scm.com/)

### **Installation**

1.  **Clone the repository**
    ```sh
    git clone https://github.com/H1PP0-G/PlantPal.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd PlantPal
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Start the development server**
    ```sh
    npm run dev
    ```
    Once started, you will see a local URL in your terminal (usually `http://localhost:5173/`). Open it in your browser to see the application running.

---

##  Configuration Management & Workflow

This project adheres to a systematic configuration management plan and development workflow to ensure code quality and team collaboration.

*   **Version Control:** Uses **Git** for distributed version control, with **GitHub** as the remote repository for hosting and collaboration.
*   **Branching Model:** Implements a **simplified Git Flow model**.
    *   `main`: The production branch, containing the most stable, deployable code.
    *   `develop`: The integration branch for features. All feature branches are merged here for testing.
    *   `feature/PP-<Jira-ID>-<desc>`: Branches for developing new features, linked to Jira task IDs.
*   **Commit Convention:** Follows the **Conventional Commits** specification. The format `type: subject` (e.g., `feat: Add plant status UI`) is used to maintain a clear and readable commit history.
*   **Code Review:** All merges into the `develop` and `main` branches must be done through a **Pull Request (PR)**. PRs require review and approval from at least one other team member to ensure code quality.

---

##  Roadmap

*   [ ] Implement a CI/CD pipeline with GitHub Actions for automated testing and deployment.
*   [ ] Introduce a back-end service for user authentication.
*   [ ] Persist plant data in a database.
*   [ ] Add more care reminders (e.g., fertilizing, repotting).

---

##  License

Distributed under the MIT License.

---

##  Author

**WenboHe**

*   GitHub: [@H1PP0-G](https://github.com/H1PP0-G)
