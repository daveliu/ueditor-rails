desc "Copy ueditor to the Rails `public/ueditor` directory"
task :ueditor do
  require 'ueditor-rails'

  target = "#{Rake.original_dir}/public/ueditor"

  mkdir_p "#{target}"
  
  files = Dir.glob("#{Ueditor::Rails.ueditor_path}/")
  FileUtils.cp_r files, "#{target}"

end