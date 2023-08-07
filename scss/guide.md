# swade-scifi-theme Styling Guide

## Elements
The majority of styles are applied directly to particular elements, and won't require additional classses to be applied. The following elements should be used to get the right styles:

- `<p>` - The paragraph tag should be used to wrap any text that isn't a heading, table cell, or other specially marked text.

- `<h1>` - This is the largest heading, and it has two variations. The wide h1 heading has dark text, and curly icons to the left and right. The narrow version on the other hand, is light text, in a box with a red decorative background. To specify which version, you will need to use a class:

	```html
	<h1 class="wide">A Wide heading</h1>
	<h1 class="narrow">Fancy red box on me</h1>
	```

- `<h2>` - This is the second level of heading, normally it has red text, an underline, and is centered. You can use the `no-underline` class to remove the underline in cases where it is not used. The `h2.no-underline` is the heading used in the names of statblocks.

- `<h3>` - The third level of heading, red, left aligned, and smaller than the other headings.

- `<ul>` & `<li>` - The unordered list is used in conjuntion with the `<li>` list item to create a list, these will be styled with square bullets of the appropriate color.

- `<table>` - The table is used for all tabular data, tables contain `<tr>` table rown elements, which contain `<td>` cells or `<th>` header cells. Some tables include a ton of data, such as weapon tables, and don't fit will into the Journal window because of how wide they need to be. You can add the class `wide` to a table: `<table class="wide"> </table>` in this case, which will make the text a little smaller and the table itself a little wider to help fit all that data.
  - `<tr>` - Each row of cells is contained in one of these, each row alternates in color. Sometimes, you may need the table to start with a row of a differening color, you can add an empty `<tr></tr>` in these places to "skip" a color. Furthermore, sometimes a row with have a "note" in it assocaited with the row above, place an empty row between them so they appear in the same color, and look like a single cell. If you have a row that contains one of these notes that are indented, use the `table-note` class on the `<tr>`.
  - `<td>` - Most cells in a table are data cells, and they are represented by `<td>` tags. These tags should not contain `<p>` tags unless the data is in the form of a paragrah, for data that is just a word or two, or a number, do not add a `p`. In many cases, especially for number values, the text in the cell should be centered. In this case, add the class `centered` to the cell: `<td class="centered"> </td>`.
  - `<th>` - The table heading is a special cell that represents a heading in the table. A simple `th` just contains text, but the text will be bold. You may also use `left`, `centered`, or `right` to adjust the text alignment on these. Some table headings are light colored text, on a dark solid background, these are represented by the `dark` class on the `th`: `<th class="dark"> </th>`.
  - `<th><h2> </h2></th>` - Many tables have a special heading, which is light text on a gradiant red/blakc background. This is represented by an `h2` element insid of a `th`.
  
- `<blockquote>` & `<cite>` - This represents a quotation, these use a special font, and are larger and cold. Each `<blockquote>` should contain a `<cite>` which contains in the name of the speaker. The actual text of the quote should also be wrapped in a `<p>` tag, and the quotation marks of the quote, and the dash "-" on the name should not be included:

	```html
	<blockquote>
		<p>Please use spaces even though everyone knows tabs are better.</p>
		<cite>Dev (probably)</cite>
	</blockquote>
	```

- `<aside>` - Used to represent a sidebar or special call-out box, for sidebars use the `sidebar` class. There is also a `handwriting` class used for the note about "Smith & Robards Ammunition". This element is used to wrap the sidebar content and give it a special background. The `<aside>` can contain an `<h1>` which has special formatting in this location.

	```html
	<aside class="sidebar">
		<h1>Sidebar Title</h1>
		<p>Sidebar text</p>
	</aside>
	```

- `<div>` - The most genric of elements, used to wrap things together, or provide additional structure where needed.

- `<img>` - Images require some aesthetic choices, in some cases you may want an image to fill the entire width of the journal, for these you don't need to add any classes. However, many images take up too much space, or might look better if they allowed text to flow around them. In these cases, use the `float-right` or the `float-left` class to make the image smaller, push it to the right or left, and allow text to flow around. Additionally, some images, usually of people, have a lot of empty space and it's nice if the text flows into that empty space around the shape of the image. To achieve this, you need to add a bit of extra markup to the image:

	```html
	<img class="float-right"
		src="modules/swade-scifi-theme-hahh/assets/art/person.webp" 
		alt="A person standing there"
		style="shape-outside: url('modules/swade-scifi-theme-hahh/assets/art/person.webp');">
	```
This applies the CSS `shape-outside` property, using the image alpha as the shape. Notice that the `url` contains the *same* image path as the image `src` attribute. Also notice the single quote `'` marks here.

## Classes

- `swade-scifi-theme-core` - This class should be applied to a `<div>` which wraps everything in each journal entry.

- `hanging-indent` - A class that can be applied to a `<p>` element to give it a reverse/hanging indent, this is used in statblocks.

- `left`, `center`, & `right` - These classes change the aligment of text. Useful in tables, and anywhere else where you need text aligned in a way that it doesn't do be default. Can be applied to `th`, `td`, `p`, h tags, and pretty much anything else.

- `western` - This class is applied on a `<span>` to make a small bit of text use a special font, color, and size. This is used for things like fear level, edge requirements, and more.

- `read-aloud` - Put this class on a `<p>` element when marking up text that is supposed to be read to the players, this produces an indented italics text with a red-brown color.

- `gun-icon` & `star-icon` - These two classes produce special icons. For accessibility, you should pair this with a `<span class="no-display">` which contains text describing the icon's meaning. For instance: `<h2 class="star-icon"><span class="no-dispaly">Wild Card</span> Harrowed</h2` will show a star indicating a wild card. Only the star will be shown, the text will be hidden. But a screen reader will be able to read this text.

- `no-display` - Use this class in conjunction with the above to make an element invisible on the sceen, but that assistive technology will still read.

- `wide` - This class can be used on an `h1` to produce the wider dark text heading with swirly icons, or it can be used on a `table` to make the table fit a large number of columns better (tables like weapons will need this).

- `narrow` - Used on an `h1` for the narrower, ornate red background heading.

- `no-underline` - Used on the `h2`, especially in statblocks, where there shouldn't be an underline.

- `list-heading` - This class is used on a `span` in a few location in lists where the text begins with special bold text (not to be confused with `western` which is also a different color, or with `<strong>` which makes the text bold but doesn't change the font and other display properties).

- `dark` - Used on some `<th>` tags that have a dark background and light colored text.

- `sidebar` - Used on the `<aside>` element to indicate that it's a sidebar.

- `handwriting` - Used on an `<aside>` for the special "hand written" note about "Smith & Robards Ammunition" (I'm unsure if it appear more than this once?).

- `chapter-heading` - Put this clsss on a `<div>` as part of a big chapter heading. This `div` must contain an `<h1>` with the name of the chapter, followed by a `<figure>` with two spans each with their own special class, representing the text "chapter" and the chapter number. This produces the fancy chapter heading box with special background, and the chapter number in the upper right corner. Optional: A `<span class="subtitle">` can be added after the `<figure>`.

	```html
	<div class="chapter-heading">
		<h1>Into The Weird West</h1>
		<figure class="chapter-number">
			<span class="chapter-label">Chapter</span>
			<span class="chapter-numeral">1</span>
		</figure>
		<span class="subtitle">Part One: Bad Times on the Goodnight</span>
	</div>
	```

- `smaller` & `smaller-2` - Put this class on the `<h1>` inside of a `chapter-heading` to make the text a little smaller for very long chapter names (ex: "Marshal's Setting Rules". And use `smaller-2` for even smaller text such 

- `float-left` & `float-right` - These classes can be put on elements like `aside`, `table`, `img`, `blockquote` and more. Elements with these classes will "float" to the left or right, and become narrower allowing regular text to flow around them on the other side. This allows for sidebars, pull quotes, and less intrusive images. Try to avoid putting one of these right before an `<h2>` that has an underline, the line will intersect the floating box in an ugly way. If nessesary just move the element below the `h2`, or further above it so they don't touch.