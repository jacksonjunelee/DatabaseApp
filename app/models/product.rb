class Product < ActiveRecord::Base
  has_many :inventories
  # has_attached_file :image, :styles => { :medium => "300x300>",:thumb => "100x100>"},
                    # :storage => :s3,
                    # :s3_credentials => Proc.new{|a| a.instance.s3_credentials}

  # validates_attachment :image, :presence => true, :content_type => { :content_type => /\Aimage\/.*\Z/}

  def s3_credentials
    {:bucket => "databaseapp", :access_key_id => ENV["S3_API"], :secret_access_key => ENV["SECRET_S3_API"]}
  end

  def image_url
    image.url
  end

end
