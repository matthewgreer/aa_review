require 'test_helper'

class OrdersControllerTest < ActionDispatch::IntegrationTest
  test "should get :show," do
    get orders_:show,_url
    assert_response :success
  end

  test "should get :new," do
    get orders_:new,_url
    assert_response :success
  end

  test "should get :create" do
    get orders_:create_url
    assert_response :success
  end

end
