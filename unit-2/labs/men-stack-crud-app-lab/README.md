# Solar Bodies MEN Stack CRUD Application 🪐

A fully-featured web application for exploring and managing solar system celestial bodies. Built with the MEN stack (MongoDB, Express.js, EJS, and Node.js) featuring complete CRUD operations, responsive design, and educational content about our solar system.

## Features ✨

### Core Functionality

- **Complete CRUD Operations**: Create, read, update, and delete solar bodies
- **RESTful API Design**: Clean, predictable URL structure following REST conventions
- **Responsive Web Interface**: Mobile-first design with modern CSS styling
- **Image Gallery**: Visual representation of planets, dwarf planets, and other celestial bodies
- **Data Validation**: Server-side validation ensuring data integrity

### Solar Body Properties

Each celestial body includes:

- **Type**: Planet, Dwarf Planet, Star, etc.
- **Name**: Official designation
- **Position from Sun**: Astronomical ordering
- **Visual Image**: High-quality celestial body photography
- **Planet Classification**: Boolean flag for planetary status

## Technology Stack 🔧

- **Backend**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Templating**: EJS for server-side rendering
- **Styling**: Modern CSS with component-based architecture
- **Development**: Nodemon for hot-reloading during development

## Quick Start 🚀

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas account or local MongoDB installation
- pnpm package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd men-stack-crud-app-lab

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env
# Add your MongoDB connection string to .env file

# Start development server
pnpm run dev

# Or start production server
pnpm start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string_here
PORT=5000
```

## API Endpoints 📡

Complete RESTful routing implementation:

| HTTP Method | Route                    | Controller Action | Description                |
| ----------- | ------------------------ | ----------------- | -------------------------- |
| GET         | `/`                      | -                 | Application home page      |
| GET         | `/solar-bodies`          | `index`           | List all solar bodies      |
| GET         | `/solar-bodies/new`      | `new`             | Display creation form      |
| POST        | `/solar-bodies`          | `create`          | Create new solar body      |
| GET         | `/solar-bodies/:id`      | `show`            | Show specific solar body   |
| GET         | `/solar-bodies/:id/edit` | `edit`            | Display edit form          |
| PUT         | `/solar-bodies/:id`      | `update`          | Update existing solar body |
| DELETE      | `/solar-bodies/:id`      | `destroy`         | Delete solar body          |

## Project Architecture 🏗️

### MVC Pattern Implementation

```text
men-stack-crud-app-lab/
├── server.js                 # Application entry point & middleware setup
├── models/
│   └── solarBody.js         # Mongoose schema and model definition
├── controllers/
│   └── solarBodies.js       # Business logic and request handlers
├── routes/
│   └── solarBodies.js       # Express router configuration
├── views/                   # EJS templates
│   ├── index.ejs           # Landing page
│   ├── partials/
│   │   └── navbar.ejs      # Reusable navigation component
│   └── solar-bodies/       # Feature-specific views
│       ├── index.ejs       # Solar bodies listing
│       ├── new.ejs         # Creation form
│       ├── show.ejs        # Detail view
│       └── edit.ejs        # Edit form
├── public/                 # Static assets
│   ├── styles/
│   │   ├── globals.css     # Global styles and CSS custom properties
│   │   └── components/     # Component-specific stylesheets
│   │       ├── buttons.css
│   │       ├── cards.css
│   │       ├── forms.css
│   │       ├── grids.css
│   │       ├── hero.css
│   │       └── navbar.css
│   └── images/             # Celestial body images
│       ├── sun.jpg
│       ├── mercury.jpg
│       ├── venus.jpg
│       ├── earth.jpg
│       ├── mars.jpg
│       ├── jupiter.jpg
│       ├── saturn.jpg
│       ├── uranus.jpg
│       ├── neptune.jpg
│       ├── pluto.jpg
│       ├── ceres.jpg
│       ├── eris.jpg
│       ├── haumea.jpg
│       ├── makemake.jpg
│       └── solar-system.jpg
├── package.json            # Dependencies and scripts
└── .env                   # Environment configuration
```

### Data Model

The `SolarBody` model includes the following schema:

```javascript
{
  type: String (required) - "Planet", "Dwarf Planet", "Star"
  name: String (required) - Official celestial body name
  positionFromSun: Number (required) - Astronomical unit ordering
  image: String (required) - Filename for visual representation
  isPlanet: Boolean (optional) - True for the 8 recognized planets
  id: Number (required) - Unique identifier for ordering
}
```

## Development Scripts 📝

- `pnpm start` - Start production server
- `pnpm run dev` - Start development server with hot-reloading

## Future Enhancements 🔮

- User authentication and authorization
- Favorite solar bodies functionality
- Advanced filtering and search capabilities
- Unit and integration testing suite
- Progressive Web App (PWA) features

## Contributing 🤝

This project follows conventional commit standards and includes comprehensive accessibility, performance, and security guidelines. Please ensure all contributions maintain the established code quality standards.
