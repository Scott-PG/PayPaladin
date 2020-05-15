import React, { Component } from "react";
import "./CharacterShowMoney.css";
import { getOnePC, getOneCampaign, setCoinsPC } from "../services/api-helper";
import CoinCounter from "./coin-counter/CoinCounter";

export default class CharacterShowMoney extends Component {
  state = {
    platinum: null,
    gold: null,
    electrum: null,
    silver: null,
    copper: null,
    plat_xfer: 0,
    gold_xfer: 0,
    elec_xfer: 0,
    silv_xfer: 0,
    copp_xfer: 0,
    platTemp: 0,
    goldTemp: 0,
    elecTemp: 0,
    silvTemp: 0,
    coppTemp: 0,
    recipient_id: null,
    characterId: null,
    characterName: null,
    campaignMates: [],
    campaignId: null,
    campaignName: null,
  };

  componentDidMount = async () => {
    await this.readCharacterAndCampaign();
  };

  readCharacterAndCampaign = async () => {
    const characterId = this.props.match.params.id;
    let character = await getOnePC(characterId);
    if (character !== null) {
      if (character.campaign_id !== null) {
        let campaign = await getOneCampaign(parseInt(character.campaign_id));
        let campaignMates = campaign.player_characters.filter(
          (pc) => pc.id !== character.id
        );
        this.setState({
          platinum: character.platinum,
          gold: character.gold,
          electrum: character.electrum,
          silver: character.silver,
          copper: character.copper,
          platTemp: character.platinum,
          goldTemp: character.gold,
          elecTemp: character.electrum,
          silvTemp: character.silver,
          coppTemp: character.copper,
          characterId: character.id,
          characterName: character.name,
          campaignMates: campaignMates,
          campaignId: campaign.id,
          campaignName: campaign.name,
        });
      } else {
        this.setState({
          platinum: character.platinum,
          gold: character.gold,
          electrum: character.electrum,
          silver: character.silver,
          copper: character.copper,
          platTemp: character.platinum,
          goldTemp: character.gold,
          elecTemp: character.electrum,
          silvTemp: character.silver,
          coppTemp: character.copper,
          characterId: character.id,
          characterName: character.name,
        });
      }
    }
  };

  increaseTenPlatinum = () => {
    let temp = this.state.platTemp + 10;
    this.setState({
      platTemp: temp,
    });
  };

  increasePlatinum = () => {
    let temp = this.state.platTemp + 1;
    this.setState({
      platTemp: temp,
    });
  };

  decreasePlatinum = () => {
    let temp = null;
    this.state.platTemp > 0
      ? (temp = this.state.platTemp - 1)
      : (temp = this.state.platTemp);
    this.setState({
      platTemp: temp,
    });
  };

  decreaseTenPlatinum = () => {
    let temp = null;
    this.state.platTemp > 10
      ? (temp = this.state.platTemp - 10)
      : (temp = this.state.platTemp);
    this.setState({
      platTemp: temp,
    });
  };

  increaseTenGold = () => {
    let temp = this.state.goldTemp + 10;
    this.setState({
      goldTemp: temp,
    });
  };

  increaseGold = () => {
    let temp = this.state.goldTemp + 1;
    this.setState({
      goldTemp: temp,
    });
  };

  decreaseGold = () => {
    let temp = null;
    this.state.goldTemp > 0
      ? (temp = this.state.goldTemp - 1)
      : (temp = this.state.goldTemp);
    this.setState({
      goldTemp: temp,
    });
  };

  decreaseTenGold = () => {
    let temp = null;
    this.state.goldTemp > 10
      ? (temp = this.state.goldTemp - 10)
      : (temp = this.state.goldTemp);
    this.setState({
      goldTemp: temp,
    });
  };

  increaseTenElectrum = () => {
    let temp = this.state.elecTemp + 10;
    this.setState({
      elecTemp: temp,
    });
  };

  increaseElectrum = () => {
    let temp = this.state.elecTemp + 1;
    this.setState({
      elecTemp: temp,
    });
  };

  decreaseElectrum = () => {
    let temp = null;
    this.state.elecTemp > 0
      ? (temp = this.state.elecTemp - 1)
      : (temp = this.state.elecTemp);
    this.setState({
      elecTemp: temp,
    });
  };

  decreaseTenElectrum = () => {
    let temp = null;
    this.state.elecTemp > 10
      ? (temp = this.state.elecTemp - 10)
      : (temp = this.state.elecTemp);
    this.setState({
      elecTemp: temp,
    });
  };

  increaseTenSilver = () => {
    let temp = this.state.silvTemp + 10;
    this.setState({
      silvTemp: temp,
    });
  };

  increaseSilver = () => {
    let temp = this.state.silvTemp + 1;
    this.setState({
      silvTemp: temp,
    });
  };

  decreaseSilver = () => {
    let temp = null;
    this.state.silvTemp > 0
      ? (temp = this.state.silvTemp - 1)
      : (temp = this.state.silvTemp);
    this.setState({
      silvTemp: temp,
    });
  };

  decreaseTenSilver = () => {
    let temp = null;
    this.state.silvTemp > 10
      ? (temp = this.state.silvTemp - 10)
      : (temp = this.state.silvTemp);
    this.setState({
      silvTemp: temp,
    });
  };

  increaseTenCopper = () => {
    let temp = this.state.coppTemp + 10;
    this.setState({
      coppTemp: temp,
    });
  };

  increaseCopper = () => {
    let temp = this.state.coppTemp + 1;
    this.setState({
      coppTemp: temp,
    });
  };

  decreaseCopper = () => {
    let temp = null;
    this.state.coppTemp > 0
      ? (temp = this.state.coppTemp - 1)
      : (temp = this.state.coppTemp);
    this.setState({
      silvTemp: temp,
    });
  };

  decreaseTenCopper = () => {
    let temp = null;
    this.state.coppTemp > 10
      ? (temp = this.state.coppTemp - 10)
      : (temp = this.state.coppTemp);
    this.setState({
      coppTemp: temp,
    });
  };

  revertCoins = () => {
    let { platinum, gold, electrum, silver, copper } = this.state;
    this.setState({
      platTemp: platinum,
      goldTemp: gold,
      elecTemp: electrum,
      silvTemp: silver,
      coppTemp: copper,
    });
  };

  submitCoins = async () => {
    let { platTemp, goldTemp, elecTemp, silvTemp, coppTemp } = this.state;
    this.setState({
      platinum: platTemp,
      gold: goldTemp,
      electrum: elecTemp,
      silver: silvTemp,
      copper: coppTemp,
    });
    await setCoinsPC(parseInt(this.state.characterId), {
      platinum: platTemp,
      gold: goldTemp,
      electrum: elecTemp,
      silver: silvTemp,
      copper: coppTemp,
    });
  };

  render() {
    let { platTemp, goldTemp, elecTemp, silvTemp, coppTemp } = this.state;
    return (
      <div>
        <>
          {this.state.characterName === null ? null : (
            <>
              <h3>{this.state.characterName}</h3>
              <div className="coin-counter-holder">
                <div className="coin-counters">
                  <CoinCounter
                    increment={this.increasePlatinum}
                    decrement={this.decreasePlatinum}
                    incrementTen={this.increaseTenPlatinum}
                    decrementTen={this.decreaseTenPlatinum}
                    value={platTemp}
                    theme="Platinum"
                  />
                  <CoinCounter
                    increment={this.increaseGold}
                    decrement={this.decreaseGold}
                    incrementTen={this.increaseTenGold}
                    decrementTen={this.decreaseTenGold}
                    value={goldTemp}
                    theme="Gold"
                  />
                  <CoinCounter
                    increment={this.increaseElectrum}
                    decrement={this.decreaseElectrum}
                    incrementTen={this.increaseTenElectrum}
                    decrementTen={this.decreaseTenElectrum}
                    value={elecTemp}
                    theme="Electrum"
                  />
                  <CoinCounter
                    increment={this.increaseSilver}
                    decrement={this.decreaseSilver}
                    incrementTen={this.increaseTenSilver}
                    decrementTen={this.decreaseTenSilver}
                    value={silvTemp}
                    theme="Silver"
                  />
                  <CoinCounter
                    increment={this.increaseCopper}
                    decrement={this.decreaseCopper}
                    incrementTen={this.increaseTenCopper}
                    decrementTen={this.decreaseTenCopper}
                    value={coppTemp}
                    theme="Copper"
                  />
                </div>
                <div className="coin-counter-button-div">
                  <button
                    className="coin-counter-button-revert"
                    onClick={this.revertCoins}
                  >
                    Revert
                  </button>
                  <button
                    className="coin-counter-button-submit"
                    onClick={this.submitCoins}
                  >
                    Set Coins
                  </button>
                </div>
              </div>
              {this.state.campaignName === null ? null : (
                <>
                  <h4>{this.state.campaignName}</h4>
                </>
              )}
            </>
          )}
        </>
      </div>
    );
  }
}
