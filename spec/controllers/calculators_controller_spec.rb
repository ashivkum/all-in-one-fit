require 'rails_helper'

RSpec.describe CalculatorsController, type: :controller do

  describe "GET #nutrition" do
    it "returns http success" do
      get :nutrition
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #workout" do
    it "returns http success" do
      get :workout
      expect(response).to have_http_status(:success)
    end
  end

end
