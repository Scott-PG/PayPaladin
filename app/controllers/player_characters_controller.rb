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

  def transfer_coins
    @sender = @player_character
    @recipient = PlayerCharacter.find_by(id: pc_transfer_params[:recipient_id])

    plat_xfer = pc_transfer_params[:platinum]
    gold_xfer = pc_transfer_params[:gold]
    elec_xfer = pc_transfer_params[:electrum]
    silv_xfer = pc_transfer_params[:silver]
    copp_xfer = pc_transfer_params[:copper]

    plat_sender = @sender[:platinum]
    gold_sender = @sender[:gold]
    elec_sender = @sender[:electrum]
    silv_sender = @sender[:silver]
    copp_sender = @sender[:copper]

    plat_recipient = @recipient[:platinum]
    gold_recipient = @recipient[:gold]
    elec_recipient = @recipient[:electrum]
    silv_recipient = @recipient[:silver]
    copp_recipient = @recipient[:copper]

    if plat_xfer <= plat_sender && gold_xfer <= gold_sender && elec_xfer <= elec_sender && silv_xfer <= silv_sender && copp_xfer <= copp_sender
      
      plat_sender = plat_sender - plat_xfer
      gold_sender = gold_sender - gold_xfer
      elec_sender = elec_sender - elec_xfer
      silv_sender = silv_sender - silv_xfer
      copp_sender = copp_sender - copp_xfer

      plat_recipient = plat_recipient + plat_xfer
      gold_recipient = gold_recipient + gold_xfer
      elec_recipient = elec_recipient + elec_xfer
      silv_recipient = silv_recipient + silv_xfer
      copp_recipient = copp_recipient + copp_xfer
      
      @sender.update(platinum: plat_sender, gold: gold_sender, electrum: elec_sender, silver: silv_sender, copper: copp_sender)
      @recipient.update(platinum: plat_recipient, gold: gold_recipient, electrum: elec_recipient, silver: silv_recipient, copper: copp_recipient)
      
      render json: @player_character, status: :ok
    else
      render json: @player_character, status: :bad_request
    end
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

  def pc_transfer_params
    params.permit(:recipient_id, :platinum, :gold, :electrum, :silver, :copper)
  end
end
