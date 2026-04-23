# 🚀 Dockerized Full Stack Web Stack (Node.js + Nginx + Redis + MySQL)

Bu proje, Docker Compose kullanılarak oluşturulmuş çok servisli bir web altyapısıdır. Node.js backend, Nginx reverse proxy, Redis cache ve MySQL veritabanı içerir.

---

## 🧱 Sistem Mimarisi

Client → Nginx → Node.js → Redis / MySQL

---

## ⚙️ Kullanılan Teknolojiler

- Node.js (Express)
- Nginx
- Redis
- MySQL
- Docker
- Docker Compose

---

## 🚀 Proje Özellikleri

- Docker Compose ile multi-container mimari
- Nginx reverse proxy
- Node.js REST API
- Redis caching sistemi
- MySQL database servisi
- Tek komut ile tüm sistemi ayağa kaldırma
- Load test ile performans ölçümü (ApacheBench)

---

## 📦 Kurulum

### 1. Projeyi klonla

```bash
git clone https://github.com/remziicnnn/dockerized-web-stack.git
cd dockerized-web-stack

#### 2. Servisleri başlat
```bash
docker compose up -d --build
```

### 🌐 Erişim
- Uygulama: http://localhost
- Sunucu IP: http://SUNUCU_IP


### ⚡ Load Test Sonuçları

ApacheBench ile test edilmiştir:

- 1000 request
- 50 concurrency
- ~815 request/saniye
- 0 failed request
- Ortalama latency: ~60 ms

### 🧠 Öğrenilen Konular
- Microservice mimarisi
- Docker container yönetimi
- Nginx reverse proxy
- Redis caching
- MySQL entegrasyonu
- Load testing (ApacheBench)
- Container networking

### 📊 Gelecek Geliştirmeler
- Prometheus + Grafana monitoring-
- CI/CD pipeline (GitHub Actions)
- HTTPS (Let's Encrypt)
- Redis cache hit/miss tracking
- MySQL persistent volume
- .env environment yönetimi
- Rate limiting ve security hardening
#### 👨‍💻 Geliştirici

Bu proje öğrenme ve DevOps pratiği amacıyla geliştirilmiştir.
