# VK Premium Portfolio

A premium, responsive, static personal portfolio for **Vasantha Kumar (VK)**.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js` and the `assets` folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save. GitHub will publish the site.

## Personalize before publishing

Open `index.html` and replace:
- `YOUR_EMAIL@example.com` with your email.
- The LinkedIn placeholder action with your real LinkedIn URL.
- The GitHub placeholder action with your real GitHub URL.
- The VK Vlogs button with your YouTube channel URL.

### Profile photo

The current hero uses a stylish `VK` placeholder so the site works immediately. To add your photo, replace the `.avatar-placeholder` div in `index.html` with an image, for example:

```html
<img class="profile-photo" src="assets/profile.jpg" alt="Vasantha Kumar">
```

Then add this CSS to `style.css`:

```css
.profile-photo{width:72%;height:72%;object-fit:cover;border-radius:20px;z-index:2}
```

## Included

- Premium dark/red visual system
- Responsive mobile layout
- Smooth scrolling
- Scroll reveal animations
- Animated achievement counters
- Skills and technology sections
- Experience timeline
- Projects
- Creator / VK Vlogs section
- AI & future technology section
- Contact section
- SEO metadata
- No build tools required
