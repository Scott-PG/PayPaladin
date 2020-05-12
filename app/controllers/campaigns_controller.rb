class CampaignsController < ApplicationController
  before_action :set_campaign, only: [:show, :update, :destroy]
  before_action :all_campaigns, only: [:index]

  # GET /campaigns
  def index
    render json: @campaigns, status: :ok
  end

  # GET /campaigns/1
  def show
    render json: @campaign, include: :player_characters, status: :ok
  end

  # POST /campaigns
  def create
    @campaign = Campaign.new(campaign_params)

    if @campaign.save
      render json: @campaign, status: :created
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end
  
  # PUT /campaigns/1
  def update
    if @campaign.update(campaign_params)
      render json: @campaign, status: :accepted
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /campaigns/1
  def destroy
    @campaign.destroy
  end
  
  private
  
  def set_campaign
    @campaign = Campaign.find(params[:id])
  end
  
  def all_campaigns
    @campaigns = Campaign.all
  end

  def campaign_params
    params.require(:campaign).permit(:name, :user_id)
  end
end
