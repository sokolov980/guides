# How to Self-Host SearXNG with Docker

This guide explains how to deploy SearXNG using Docker on Linux, macOS, or Windows.

---

## 1. Requirements

- Docker installed on your system  
  - Linux: install from your package manager or the Docker website  
  - macOS: Docker Desktop  
  - Windows: Docker Desktop (with WSL2 enabled)  
- Docker Compose (included in Docker Desktop, or available as a standalone tool on Linux)  
- A directory where you will store configuration files  
- Optional: a domain name if you want HTTPS

---

## 2. Download the Official SearXNG Docker Setup

Open a terminal or PowerShell and run:

```bash
git clone https://github.com/searxng/searxng-docker.git
cd searxng-docker
```

This repository includes the SearXNG service, Redis, and a reverse proxy (Caddy).

---

## 3. Configure Environment Variables

Copy the provided example file:

```bash
cp .env.example .env
```

Edit `.env`:

- Set `SEARXNG_HOSTNAME` to your domain or local IP

- For automatic TLS with Caddy, set `LETSENCRYPT_EMAIL`

- If you are using only local access, set `SEARXNG_TLS=internal`

Generate a strong secret key:

```bash
openssl rand -hex 32
```

Place this key in `searxng/settings.yml` under `server.secret_key`.

---

## 4. Prepare Persistent Storage

Create directories for configuration and cache:

```bash
mkdir -p ./searxng/config
mkdir -p ./searxng/data
```

These map into the containers so your settings survive updates.

---

## 5. Configure Docker Compose

The `docker-compose.yml` in the repository already includes all required services. It starts:

- SearXNG on port 8080 inside the container

- Redis for caching

- Caddy as an optional reverse proxy for HTTP or HTTPS

You do not need to modify it unless you want to run your own reverse proxy.

---

## 6. Configure the Reverse Proxy (Optional but Recommended)

If you want automatic HTTPS and clean external access, edit the `Caddyfile`:

```bash
{$SEARXNG_HOSTNAME} {
    tls {$LETSENCRYPT_EMAIL}

    encode gzip zstd

    reverse_proxy localhost:8080
}
```

If you do not need HTTPS or do not want a proxy, you can access SearXNG directly through a mapped port by editing `docker-compose.yml` to include:

```yaml
ports:
  - "8080:8080"
```

---

## 7. Start SearXNG

Run:

```bash
docker compose up -d
```

Docker pulls the images, builds the environment, and starts all services in the background.

---

## 8. Access Your Instance

- If using Caddy with a domain: open `https://your-domain`

- If using a direct port mapping: open `http://localhost:8080` or `http://your-server-ip:8080`

You should now see the main SearXNG search page.

---

## 9. Basic Security Steps

**1.** Confirm that `server.secret_key` in `settings.yml` is unique.

**2.** Keep rate limiting turned on to prevent abuse.

**3.** If the instance is public, monitor logs for unusual traffic:

```bash
docker compose logs -f searxng
docker compose logs -f caddy
```

---

10. Updating SearXNG

To update your instance:

```bash
docker compose pull
docker compose down
docker compose up -d
```

Your configuration and data are stored outside the containers, so updates are safe.

---

## 11. Using a Custom Reverse Proxy

If you prefer Nginx, Apache, Traefik, or Caddy outside Docker:

**1.** Remove or comment out the Caddy service

**2.** Map SearXNG’s port:

```yaml
ports:
  - "8080:8080"
```

**3.** Forward traffic from your proxy to `http://localhost:8080`

Set headers such as `X-Real-IP` if your proxy requires them.

---

## 12. Backups

Back up the following directories:

`./searxng/config`

`./searxng/data` (optional; contains cached icons and other noncritical data)

This ensures your settings are safe if you move servers or rebuild the environment.

---

## 13. Final Notes

You now have a self-hosted SearXNG instance that runs consistently on Linux, macOS, and Windows systems. The setup is lightweight, easy to maintain, and gives you full control over your search experience without relying on third-party operators or public instances.

---
