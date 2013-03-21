# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require File.expand_path('../lib/ueditor/rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.name          = "ueditor-rails"
  gem.version       = Ueditor::Rails::VERSION  
  gem.authors       = ["daveliu"]
  gem.email         = ["dave@liageren.com"]
  gem.description   = %q{Seamlessly integrates Ueditor into the Rails asset pipeline introduced in Rails 3.1.}
  gem.summary       = %q{Rails asset pipeline integration for Ueditor.}
  gem.homepage      = "https://github.com/daveliu/ueditor-rails"
  

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]
end
