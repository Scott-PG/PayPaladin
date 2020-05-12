class PlayerCharactersController < ApplicationController
  before_action :set_player_character, except: [:index, :create]
  # before_action :authorize_request, except: [:show, :accept_coins]

  def index
    @player_characters = PlayerCharacter.all

    render json: @player_characters
  end

  def show
    render json: @player_character, status: :ok
  end

  def create
    @player_character = PlayerCharacter.new(player_character_creation_params)

    if @player_character.save
      render json: @player_character, status: :created
    else
      render json: @player_character.errors, status: :unprocessable_entity
    end
  end

  def join_campaign
    if @player_character.update(player_character_campaign_params)
      render json: @player_character
    else
      render json: @player_character.errors, status: :unprocessable_entity
    end
  end

  def leave_campaign
    if @player_character.update(campaign_id: nil)
      render json: @player_character
    else
      render json: @player_character.errors, status: :unprocessable_entity
    end
  end

  def change_coins
    if @player_character.update(player_character_coin_params)
      render json: @player_character
    else
      render json: @player_character.errors, status: :unprocessable_entity
    end
  end

  def transfer_coins(recipient_id, platinum, gold, electrum, silver, copper)
    @sender = @player_character
    @recipient = PlayerCharacter.find_by(id:params[recipient_id])
  end

  def update
    if @player_character.update(player_character_params)
      render json: @player_character
    else
      render json: @player_character.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @player_character.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_player_character
    @player_character = PlayerCharacter.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through, depending on the function.
  def player_character_creation_params
    params.require(:player_character).permit(:name, :user_id, :campaign_id)
  end

  def player_character_coin_params
    params.require(:player_character).permit(:platinum, :gold, :electrum, :silver, :copper)
  end

  def player_character_campaign_params
    params.require(:player_character).permit(:campaign_id)
  end
end
