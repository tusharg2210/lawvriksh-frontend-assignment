# LawVriksh Frontend Assignment - Analytics Dashboard
This project is a responsive and interactive analytics dashboard built with React.js, based on the provided Figma design. The goal was to create a polished and user-friendly interface, applying key UX principles and purposeful micro-interactions.

## Running the Project
To run this project locally, you'll need to have Node.js and npm (or yarn) installed.

### Clone the repository:
```
git clone <your-repo-url>
cd lawvriksh-frontend-assignment
```
### Install dependencies:
```
npm install
```
### Start the development server:
```
npm run dev
```
The application should now be running on [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

## Tech Stack
- React.js: The core library for building the user interface.

- Tailwind CSS: For utility-first styling and creating a responsive layout.

- Recharts: A composable charting library for building the data visualizations.

## UX Laws Applied
The design and implementation of this dashboard were guided by several fundamental UX laws to ensure an intuitive and effective user experience.

### Aesthetic-Usability Effect
This principle states that users often perceive aesthetically pleasing designs as more usable. We prioritized a clean, modern, and visually consistent interface with a balanced dark theme, proper spacing, and clear typography. This not only makes the dashboard look good but also instills a sense of trust and makes the data easier to engage with.

### Law of Proximity
Objects that are near one another are perceived as being grouped together. The dashboard heavily relies on this law by using Card components to group related information. For example, the "Website Visitors" chart, its central metric (150k), and its legend (Organic, Social, Direct) are all contained within a single card, making it clear they are part of a single, cohesive unit.

### Hick's Law
Hick's Law suggests that the time it takes to make a decision increases with the number and complexity of choices. The dashboard design simplifies complex datasets into clear, scannable visualizations (e.g., bar charts, pie charts). This reduces the user's cognitive load by presenting key insights upfront, with more detailed information available through interactions like tooltips, rather than cluttering the interface.

### Fitts's Law
This law dictates that the time to acquire a target is a function of the distance to and size of the target. All interactive elements—such as buttons, navigation links, and chart segments—are sized and spaced appropriately to be easily and quickly clickable, ensuring a smooth and error-free user journey.