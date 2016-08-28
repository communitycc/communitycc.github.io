Recording
---------

Use Audacity for recording
* From the start of the sermon to just before the prayer at the end
* Save the audio file using the date as the filename (2016-06-19)
* Then File > Export Audio…
* Keep the filename, save as M4A

Prepare the Website Files
-------------------------

* Open Github (Start > All Apps > Github, Inc > Github)
* Click ```Sync``` in the upper right
* Right click on ``community.github.io``, Open in Explorer
* Right click on index.html, Open in Notepad
* Copy one of the blocks of HTML for the sermon, and paste a new one at the top of the section

```html
<div class="selected" 
     data-date="2016-06-19">
    <img src="sermons/wisdom.jpg" />
    <h3>The Heart</h3>
    <p class="date">June 19</p>
    <p class="series">Series: Way of Wisdom</p>
    <audio controls="">
    <source src="sermons/2016-06-19.m4a" type="audio/mpeg"></source>
    <object width="" height="" type="application/x-shockwave-flash" data="sermons/mediaelementjs/flashmediaelement.swf">
        <param name="audio" value="sermons/mediaelementjs/flashmediaelement.swf" />
        <param name="flashvars" value="file=sermons/2016-06-19.m4a" />
    </object>
    </audio>
    <p class="download">
        <a href="sermons/2016-06-19.m4a" class="downloadlink" title="Download this sermon">Download</a>
        (right click and choose "Save Link As...")
    </p>
</div>
```

* Make sure to update each place the date appears (5 places), the title, Series, and artwork if there is any (if not, remove the ```<img>``` tag)
* Only the new sermon should have ```class="selected"```. Remove it from any other block.
* Then update the link for the sermon. Copy one of the ```<li>```s and paste a new one at the top

```html
<li><span class="selected"
    data-datenum="2016-06-19">
    June 19 - The Heart
    </span>
</li>
```

* Update both dates and the title
* Only the new link should have ```class="selected"```. Remove it from any other block.
* Save and close

Move the audio file over
------------------------

* Open a second explorer window, and click on the pinned Sermons folder on the left
* Copy the sermon just recorded into the ```sermons``` folder with the website files.
* Open ```index.html``` in Chrome to make sure everything looks good and is working.

Upload the Files
----------------

* In Github, click on the ```Changes``` tab at the top
* Enter a summary like "Uploading the June 19 sermon"
* Click ```Commit to master```
* When that has finished, click ```Sync``` in the upper right

