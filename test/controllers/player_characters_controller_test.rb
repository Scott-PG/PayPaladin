require 'test_helper'

class PlayerCharactersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get player_characters_index_url
    assert_response :success
  end

  test "should get show" do
    get player_characters_show_url
    assert_response :success
  end

  test "should get create" do
    get player_characters_create_url
    assert_response :success
  end

  test "should get join_campaign" do
    get player_characters_join_campaign_url
    assert_response :success
  end

  test "should get leave_campaign" do
    get player_characters_leave_campaign_url
    assert_response :success
  end

  test "should get change_coins" do
    get player_characters_change_coins_url
    assert_response :success
  end

  test "should get accept_coins" do
    get player_characters_accept_coins_url
    assert_response :success
  end

  test "should get update" do
    get player_characters_update_url
    assert_response :success
  end

  test "should get destroy" do
    get player_characters_destroy_url
    assert_response :success
  end

end
