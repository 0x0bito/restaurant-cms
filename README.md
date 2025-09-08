# 🍽️ Restaurant CMS

A modern, self-hosted solution for managing restaurant content. This project combines a Next.js 15 frontend website with a Sanity Studio CMS, containerized with Docker for easy deployment.

## Features

- **Website Frontend**: Next.js 15 with App Router and TypeScript
- **Content Management**: Sanity Studio for intuitive content editing
- **Real-time Updates**: Automatic cache revalidation when content changes
- **Dockerized**: Easy setup and deployment with Docker Compose

## Project Structure

```
restaurant-cms/
├── 📁 app/                 # Next.js 15 frontend (Restaurant website)
│   ├── Dockerfile
│   └── .env               # Environment variables (create manually)
├── 📁 studio/             # Sanity Studio (Content management)
│   ├── Dockerfile
│   └── .env               # Environment variables (create manually)
└── 🐳 docker-compose.yml  # Multi-container configuration
```

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Quick Start

1.  **Clone and setup environment variables**:

    ```bash
    git clone git@github.com:0x0bito/restaurant-cms.git
    cd restaurant-cms
    ```

    #### Create environment files

    ```bash
    cp app/.env.example app/.env
    cp studio/.env.example studio/.env
    ```

2.  **Build and start the containers**:
    ```bash
    docker-compose up
    ```
3.  **Access your applications**:

    - Website: [http://localhost:3000](http://localhost:3000)
    - Sanity Studio: [http://localhost:3333](http://localhost:3333)

4.  **View logs** (optional):

    ```bash
    docker-compose logs -f
    ```

5.  **Stop services**:

    ```bash
    docker-compose down
    ```

## Sanity Webhook Configuration

To enable automatic cache revalidation when content changes, set up a webhook in Sanity:

### Step-by-Step Setup

1.  **Access Sanity Settings**:

    - Go to [Sanity Manage](https://www.sanity.io/manage)
    - Select your project → **Project Settings** → **API** → **Webhooks**

2.  **Create New Webhook**:

    - **URL**: `https://your-domain.com/api/revalidate`
    - **HTTP Method**: `POST`
    - **Secret**: Generate a secure secret and save it in `app/.env` as `REVALIDATE_SECRET`
    - **Trigger On**: Select _Create_, _Update_, _Delete_ events
    - **Filter** (paste in filter field):
      ```
      _type in ["recipe", "category", "hero", "social", "review", "footer", "contact", "navbar"]
      ```

> 💡 **Local Development Tip**: Use [ngrok](https://ngrok.com/) or similar tunneling service to expose your local server for webhook testing.

## 🔐 Environment Variables

Both applications require environment variables to function properly. A `.env.example` files are provided in each directory.

---

**Note**: Replace `your-domain.com` with your actual domain when configuring webhooks in production.
