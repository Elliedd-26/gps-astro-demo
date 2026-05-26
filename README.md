# GPS Website Demo

This is a demo website for GPS (Gal Pal Society) showing how to manage events using markdown files.

这是 GPS 网站的 demo，演示怎么用 markdown 文件管理活动文章。

---

## 📝 What you can do (你可以做什么)

### 1. Edit an existing event (修改已有活动)

Go to `src/content/events/` and click any `.md` file (except those starting with `_`). Edit the text, save, and the website updates in about 30 seconds.

去 `src/content/events/` 文件夹，点开任何 `.md` 文件（除了以 `_` 开头的），直接改文字，保存，网站大约30秒后自动更新。

---

### 2. Add a NEW event (添加新活动) ⭐

Step-by-step:

1. **Copy the template**
   - In GitHub, go to `src/content/events/_template.md`
   - Click the "..." menu in the top right, choose "Copy raw file"

   或者直接打开 `_template.md`，复制里面所有内容。

2. **Create a new file**
   - In `src/content/events/`, click "Add file" → "Create new file"
   - Name it like `your-event-name.md` (use English, all lowercase, hyphens instead of spaces — this becomes part of the URL)
   - Example: `qixi-festival-picnic.md`, `lunar-new-year-meetup.md`

   文件名规则：英文、全小写、用 `-` 代替空格。这个文件名会变成网址的一部分。

3. **Paste the template content** into the new file

4. **Fill in your event details** — replace everything in `[brackets]` with your real content. Keep the structure:
   - `title` and `title_zh`: the event name in English and Chinese
   - `date`: format like `2026-06-15`
   - `location` and `location_zh`: where it happened
   - `cover_image`: path to a cover photo (see step 5 below)
   - `description` / `description_zh`: a one-sentence preview that shows on the homepage card

   然后填入活动的真实内容。注意保留结构，只替换 `[方括号]` 里的占位文字。

5. **Add photos**
   - In `public/images/`, create a new folder for your event (e.g., `public/images/qixi-picnic/`)
   - Upload your photos (rename them to `01.jpg`, `02.jpg`, `03.jpg`, etc.)
   - Make sure the `cover_image` path in your md file matches
   - Reference photos in the body using `![description](/images/your-folder/02.jpg)`

   在 `public/images/` 里新建一个属于这个活动的文件夹，把照片放进去（建议命名为 01.jpg, 02.jpg ...）

6. **Commit your changes**
   - Scroll down on the GitHub page
   - Write a short message like "Add Qixi festival event"
   - Click "Commit changes"

7. **Wait ~1 minute**
   - Vercel will automatically rebuild the site
   - Your new event will appear on the homepage and at /events/your-event-name

   等大约1分钟，Vercel 会自动重新生成网站，新活动就会出现在首页和对应链接。

---

### 3. Replace photos (替换照片)

In `public/images/[event-folder]/`, replace the .jpg files with new ones of the same names. Commit, wait, done.

在对应活动的图片文件夹里，用相同文件名替换图片，提交，等待，完成。

---

## ❓ FAQ

**Q: What if I make a mistake and the website breaks?**
A: Don't worry. Go to your Vercel dashboard → Deployments → find the last working version → click "Promote to Production". The site rolls back instantly.

**Q: 如果我搞坏了网站怎么办？**
A: 别担心。去 Vercel 后台找到上一个正常的版本，点 "Promote to Production"，网站立刻回到上一个状态。

---

**Q: Can I use Chinese characters in the filename?**
A: Better not to — they cause issues in URLs. Use English with hyphens.

**Q: 文件名可以用中文吗？**
A: 最好不要，会导致网址问题。用英文小写加横线就好。

---

## 🖥️ Running locally (在本地预览)

If you want to preview before changes go live:

如果想在改动上线之前先在自己电脑上看看：

```bash
npm install
npm run dev
```

Then open http://localhost:4321 in your browser.

然后在浏览器里打开 http://localhost:4321。

---

Questions? Ask Ellie. / 有问题？随时问 Ellie。
