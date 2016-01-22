require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get routines" do
    get :routines
    assert_response :success
  end

end
