require 'test_helper'

class HypocritesControllerTest < ActionController::TestCase
  setup do
    @hypocrite = hypocrites(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:hypocrites)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create hypocrite" do
    assert_difference('Hypocrite.count') do
      post :create, hypocrite: { description: @hypocrite.description, name: @hypocrite.name }
    end

    assert_redirected_to hypocrite_path(assigns(:hypocrite))
  end

  test "should show hypocrite" do
    get :show, id: @hypocrite
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @hypocrite
    assert_response :success
  end

  test "should update hypocrite" do
    put :update, id: @hypocrite, hypocrite: { description: @hypocrite.description, name: @hypocrite.name }
    assert_redirected_to hypocrite_path(assigns(:hypocrite))
  end

  test "should destroy hypocrite" do
    assert_difference('Hypocrite.count', -1) do
      delete :destroy, id: @hypocrite
    end

    assert_redirected_to hypocrites_path
  end
end
