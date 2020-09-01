# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_many :carts

  validates_presence_of :email
  validates_uniqueness_of :email, case_sensitive: false
  validates_format_of :email, with: /@/
end
