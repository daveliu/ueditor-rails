Rails 3.1 Integration for Ueditor
=================================

The `ueditor-rails` gem integrates the [Ueditor](http://ueditor.baidu.com/website/) editor with the Rails 3.1 asset pipeline.


Instructions
------------

**1. Add `ueditor-rails` to your Gemfile**

    gem 'ueditor-rails'

Be sure to add to the global group, not the `assets` group. Then run `bundle install`.


**2. Include the Ueditor assets**

Use *one* of the following options to include Ueditor assets.

(1) Add to your application.js:

    //= require ueditor


(2) The Ueditor assets can be included on a per-page basis using js:

   <script type="text/javascript" src="/assets/ueditor.js">


**3. Initialize Ueditor**

For each textarea that you want to use with Ueditor, add the "ueditor" class and ensure it has a unique ID:

    <%= text_area_tag :editor, "", :id => "myEditor", :rows => 40, :cols => 120 %>

    <script type="text/javascript">
      UE.getEditor('myEditor'， {initialFrameWidth:650})
      //Ueditor has many options and plugins, the document is here 
      //[document](http://ueditor.baidu.com/website/document.html)
    </script>


Using ueditor-rails as an Engine Dependency
-------------------------------------------

Ensure that you explicitly require `ueditor-rails` within your engine file. Including ueditor-rails as a dependency in your gemspec is not enough.


Updating
--------

When new versions of Ueditor are released, simply update the `ueditor-rails` gem to the latest version. There is no need to run any extra rake tasks (apart from `rake assets:precompile`).
