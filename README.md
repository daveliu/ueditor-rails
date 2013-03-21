ueditor-rails
======

Ueditor is a great rich text editor from [Baidu Ueditor ](http://ueditor.baidu.com/website/). This gem integrates Ueditor for Rails project. 


Installation
------------

Add `ueditor-rails` to you Gemfile.

``` ruby
gem 'ueditor-rails'
```

**Sync ueditor**

Ueditor has many js, css, image files,  so this gem doesn't follow the Rails 3.1 Asset Pipeline design, it will just  copy  Ueditor to your public directory with `rake ueditor` in your app. 

``` ruby
# Rakefile
load 'tasks/ueditor.rake'
```

```
$ rake ueditor
```


Example Rails Helper
--------------------

This would allow emojifying content such as: `it's raining :cats: and :dogs:!`

See the [Emoji cheat sheet](http://www.emoji-cheat-sheet.com) for more examples.

```ruby
module EmojiHelper
 def emojify(content)
    h(content).to_str.gsub(/:([a-z0-9\+\-_]+):/) do |match|
      if Emoji.names.include?($1)
        '<img alt="' + $1 + '" height="20" src="' + asset_path("emoji/#{$1}.png") + '" style="vertical-align:middle" width="20" />'
      else
        match
      end
    end.html_safe if content.present?
  end
end
```