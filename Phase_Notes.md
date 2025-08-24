# Phase Notes: Micro-interactions
This document outlines the key micro-interactions implemented in the dashboard to enhance the user experience.

1. Button & Link Hover States
- Interaction: User hovers over any interactive button or navigation link (e.g., "Export" button, "Settings" link in the sidebar).

- Implementation: Implemented using Tailwind CSS hover: utility classes (e.g., hover:bg-slate-700, hover:text-white) combined with transition-colors and duration-200 for a smooth visual change.

- Purpose: Provides immediate visual feedback to the user, confirming that the element is interactive. This improves the element's affordance and follows the principle of Fitts's Law by making targets feel more responsive.

2. Revenue Chart Bar Hover
- Interaction: User hovers over a specific bar in the "Revenue by customer type" chart.

- Implementation: Utilizes the built-in <Tooltip /> component from the Recharts library. The cursor style is changed to a semi-transparent fill to highlight the hovered area.

- Purpose: Implements the principle of progressive disclosure. It keeps the main chart clean while allowing users to access detailed data points on demand, preventing information overload and aligning with Hick's Law.

3. Website Visitors Pie Chart Active Segment
- Interaction: User hovers over a segment of the main "Website Visitors" pie chart.

- Implementation: Managed via React state and the activeIndex / activeShape props in the Recharts <Pie /> component. When the user's mouse enters a segment, its index is set as the activeIndex, triggering a re-render with a custom, slightly larger shape.

- Purpose: To guide the user's attention and provide clear, unambiguous feedback about which data point they are currently inspecting. This makes the chart feel more dynamic and engaging.

4. Team Member Progress Bar Animation
- Interaction: The progress bars in the "Team progress" widget animate on load.

- Implementation: Implemented using a CSS transition on the width property of the progress bar's inner div.
```
.progress-bar {
  transition: width 0.5s ease-in-out;
}

```

- Purpose: This subtle animation adds a layer of polish and makes the page feel more alive. It draws attention to the data being presented without being distracting, contributing to the Aesthetic-Usability Effect.