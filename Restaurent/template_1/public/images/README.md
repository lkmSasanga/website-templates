# Images Directory Structure

This directory is organized into folders for better management and identification of different image types.

## Folder Structure

```
images/
├── backgrounds/     # Background images for sections
│   ├── hero.jpg     # Hero section background
│   └── menu.jpg     # Menu highlights section background
│
├── menu/            # Menu item images (dishes, food items)
│   ├── beef.jpg
│   ├── burrata.jpg
│   ├── cheese_cake.jpg
│   ├── ice_cream.jpg
│   ├── lobster.jpg
│   ├── scallops.jpg
│   ├── tiramisu.jpg
│   └── truffle.jpg
│
└── profiles/        # User profile images (for testimonials, reviews, etc.)
    └── (add profile images here)
```

## Usage

- **Background images**: Used for section backgrounds (hero, menu highlights, etc.)
- **Menu images**: Used for featured dishes, menu items, and gallery
- **Profile images**: For testimonials, reviews, or user avatars (future use)

## Adding New Images

1. **Menu items**: Add dish/food images to `menu/` folder
2. **Backgrounds**: Add section backgrounds to `backgrounds/` folder
3. **Profiles**: Add user/reviewer images to `profiles/` folder

## Updating Image Paths

After adding images, update the paths in:
- `src/lib/siteData.ts` - For menu items and gallery
- Component files - For background images
