module Ueditor::Rails
  class Engine < ::Rails::Engine
    config.ueditor = ActiveSupport::OrderedOptions.new
    
    # Set an explicit base path for ueditor assets (usually defaults to /assets/ueditor)
    config.ueditor.base = nil

    initializer "precompile", :group => :all do |app|
      app.config.assets.precompile << "ueditor.js"
    end

    def self.base
      config.ueditor.base || default_base
    end

    def self.default_base
      File.join(Rails.application.config.relative_url_root || "", Rails.application.config.assets.prefix || "/", "ueditor")
    end
  end
end
