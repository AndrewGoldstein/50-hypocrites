class State
  include Mongoid::Document
  field :_id, type: String, default: -> { state_id }
  field :state_id, type: String
  field :name, type: String
  field :boundaries, type: String

  attr_accessible :name, :boundaries, :state_id

end