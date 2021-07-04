## Заготовка для картинок

```html
<picture>
    <source
        media="(min-width:1200px)"
        srcset="
            ./images/team/desk/productdesigner.jpg    1x,
            ./images/team/desk/productdesigner@2x.jpg 2x
        "
    />

    <source
        media="(min-width:768px)"
        srcset="
            ./images/team/tablet/productdesigner.jpg    1x,
            ./images/team/tablet/productdesigner@2x.jpg 2x
        "
    />

    <img
        srcset="
            ./images/team/mobile/productdesigner.jpg    1x,
            ./images/team/mobile/productdesigner@2x.jpg 2x
        "
        src="./images/team/mobile/productdesigner.jpg"
        width="450"
        alt="team member"
        loading="lazy"
    />
</picture>
```
