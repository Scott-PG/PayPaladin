import React, { Component } from "react";
import "./CharacterShowMoney.css";
import {
  getOnePC,
  getOneCampaign,
  setCoinsPC,
  transferCoinsPC,
} from "../services/api-helper";
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

  // =============================================================
  // ==========================Set Coins==========================
  // =============================================================

  // ===========================Platinum==========================
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
    this.state.platTemp >= 10
      ? (temp = this.state.platTemp - 10)
      : (temp = this.state.platTemp);
    this.setState({
      platTemp: temp,
    });
  };

  // =============================Gold============================

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
    this.state.goldTemp >= 10
      ? (temp = this.state.goldTemp - 10)
      : (temp = this.state.goldTemp);
    this.setState({
      goldTemp: temp,
    });
  };

  // ===========================Electrum==========================

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
    this.state.elecTemp >= 10
      ? (temp = this.state.elecTemp - 10)
      : (temp = this.state.elecTemp);
    this.setState({
      elecTemp: temp,
    });
  };

  // ============================Silver===========================

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
    this.state.silvTemp >= 10
      ? (temp = this.state.silvTemp - 10)
      : (temp = this.state.silvTemp);
    this.setState({
      silvTemp: temp,
    });
  };

  // ============================Copper===========================

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
      coppTemp: temp,
    });
  };

  decreaseTenCopper = () => {
    let temp = null;
    this.state.coppTemp >= 10
      ? (temp = this.state.coppTemp - 10)
      : (temp = this.state.coppTemp);
    this.setState({
      coppTemp: temp,
    });
  };

  // ===========================Buttons===========================

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
      plat_xfer: 0,
      gold_xfer: 0,
      elec_xfer: 0,
      silv_xfer: 0,
      copp_xfer: 0,
      recipient_id: null,
    });
    await setCoinsPC(parseInt(this.state.characterId), {
      platinum: platTemp,
      gold: goldTemp,
      electrum: elecTemp,
      silver: silvTemp,
      copper: coppTemp,
    });
  };

  // =============================================================
  // ========================Transfer Coins=======================
  // =============================================================

  // =======================Recipient Change======================

  handleRecipientChange = (event) => {
    let value = parseInt(event.target.value);
    this.setState({
      recipient_id: value,
    });
  };

  // ===========================Platinum==========================

  increaseTenPlatinumTransfer = () => {
    let temp = this.state.plat_xfer + 10;
    temp <= this.state.platinum
      ? (temp = this.state.plat_xfer + 10)
      : (temp = this.state.plat_xfer);
    this.setState({
      plat_xfer: temp,
    });
  };

  increasePlatinumTransfer = () => {
    let temp = this.state.plat_xfer + 1;
    temp <= this.state.platinum
      ? (temp = this.state.plat_xfer + 1)
      : (temp = this.state.plat_xfer);
    this.setState({
      plat_xfer: temp,
    });
  };

  decreasePlatinumTransfer = () => {
    let temp = this.state.plat_xfer - 1;
    temp >= 0
      ? (temp = this.state.plat_xfer - 1)
      : (temp = this.state.plat_xfer);
    this.setState({
      plat_xfer: temp,
    });
  };

  decreaseTenPlatinumTransfer = () => {
    let temp = this.state.plat_xfer - 10;
    temp >= 0
      ? (temp = this.state.plat_xfer - 10)
      : (temp = this.state.plat_xfer);
    this.setState({
      plat_xfer: temp,
    });
  };

  // =============================Gold============================

  increaseTenGoldTransfer = () => {
    let temp = this.state.gold_xfer + 10;
    temp <= this.state.gold
      ? (temp = this.state.gold_xfer + 10)
      : (temp = this.state.gold_xfer);
    this.setState({
      gold_xfer: temp,
    });
  };

  increaseGoldTransfer = () => {
    let temp = this.state.gold_xfer + 1;
    temp <= this.state.gold
      ? (temp = this.state.gold_xfer + 1)
      : (temp = this.state.gold_xfer);
    this.setState({
      gold_xfer: temp,
    });
  };

  decreaseGoldTransfer = () => {
    let temp = this.state.gold_xfer - 1;
    temp >= 0
      ? (temp = this.state.gold_xfer - 1)
      : (temp = this.state.gold_xfer);
    this.setState({
      gold_xfer: temp,
    });
  };

  decreaseTenGoldTransfer = () => {
    let temp = this.state.gold_xfer - 10;
    temp >= 0
      ? (temp = this.state.gold_xfer - 10)
      : (temp = this.state.gold_xfer);
    this.setState({
      gold_xfer: temp,
    });
  };

  // ===========================Electrum==========================

  increaseTenElectrumTransfer = () => {
    let temp = this.state.elec_xfer + 10;
    temp <= this.state.electrum
      ? (temp = this.state.elec_xfer + 10)
      : (temp = this.state.elec_xfer);
    this.setState({
      elec_xfer: temp,
    });
  };

  increaseElectrumTransfer = () => {
    let temp = this.state.elec_xfer + 1;
    temp <= this.state.electrum
      ? (temp = this.state.elec_xfer + 1)
      : (temp = this.state.elec_xfer);
    this.setState({
      elec_xfer: temp,
    });
  };

  decreaseElectrumTransfer = () => {
    let temp = this.state.elec_xfer - 1;
    temp >= 0
      ? (temp = this.state.elec_xfer - 1)
      : (temp = this.state.elec_xfer);
    this.setState({
      elec_xfer: temp,
    });
  };

  decreaseTenElectrumTransfer = () => {
    let temp = this.state.elec_xfer - 10;
    temp >= 0
      ? (temp = this.state.elec_xfer - 10)
      : (temp = this.state.elec_xfer);
    this.setState({
      elec_xfer: temp,
    });
  };

  // ============================Silver===========================

  increaseTenSilverTransfer = () => {
    let temp = this.state.silv_xfer + 10;
    temp <= this.state.silver
      ? (temp = this.state.silv_xfer + 10)
      : (temp = this.state.silv_xfer);
    this.setState({
      silv_xfer: temp,
    });
  };

  increaseSilverTransfer = () => {
    let temp = this.state.silv_xfer + 1;
    temp <= this.state.silver
      ? (temp = this.state.silv_xfer + 1)
      : (temp = this.state.silv_xfer);
    this.setState({
      silv_xfer: temp,
    });
  };

  decreaseSilverTransfer = () => {
    let temp = this.state.silv_xfer - 1;
    temp >= 0
      ? (temp = this.state.silv_xfer - 1)
      : (temp = this.state.silv_xfer);
    this.setState({
      silv_xfer: temp,
    });
  };

  decreaseTenSilverTransfer = () => {
    let temp = this.state.silv_xfer - 10;
    temp >= 0
      ? (temp = this.state.silv_xfer - 10)
      : (temp = this.state.silv_xfer);
    this.setState({
      silv_xfer: temp,
    });
  };

  // ============================Copper===========================

  increaseTenCopperTransfer = () => {
    let temp = this.state.copp_xfer + 10;
    temp <= this.state.copper
      ? (temp = this.state.copp_xfer + 10)
      : (temp = this.state.copp_xfer);
    this.setState({
      copp_xfer: temp,
    });
  };

  increaseCopperTransfer = () => {
    let temp = this.state.copp_xfer + 1;
    temp <= this.state.copper
      ? (temp = this.state.copp_xfer + 1)
      : (temp = this.state.copp_xfer);
    this.setState({
      copp_xfer: temp,
    });
  };

  decreaseCopperTransfer = () => {
    let temp = this.state.copp_xfer - 1;
    temp >= 0
      ? (temp = this.state.copp_xfer - 1)
      : (temp = this.state.copp_xfer);
    this.setState({
      copp_xfer: temp,
    });
  };

  decreaseTenCopperTransfer = () => {
    let temp = this.state.copp_xfer - 10;
    temp >= 0
      ? (temp = this.state.copp_xfer - 10)
      : (temp = this.state.copp_xfer);
    this.setState({
      copp_xfer: temp,
    });
  };

  // ============================Copper===========================

  revertTransferCoins = () => {
    let { platinum, gold, electrum, silver, copper } = this.state;
    this.setState({
      platTemp: platinum,
      goldTemp: gold,
      elecTemp: electrum,
      silvTemp: silver,
      coppTemp: copper,
      recipient_id: null,
    });
  };

  submitTransferCoins = async () => {
    let {
      plat_xfer,
      gold_xfer,
      elec_xfer,
      silv_xfer,
      copp_xfer,
      recipient_id,
    } = this.state;
    let { platinum, gold, electrum, silver, copper } = this.state;
    let characterId = parseInt(this.state.characterId);
    await transferCoinsPC(characterId, {
      recipient_id: recipient_id,
      plat_xfer: plat_xfer,
      gold_xfer: gold_xfer,
      elec_xfer: elec_xfer,
      silv_xfer: silv_xfer,
      copp_xfer: copp_xfer,
    });
    this.setState({
      platinum: platinum - plat_xfer,
      gold: gold - gold_xfer,
      electrum: electrum - elec_xfer,
      silver: silver - silv_xfer,
      copper: copper - copp_xfer,
      plat_xfer: 0,
      gold_xfer: 0,
      elec_xfer: 0,
      silv_xfer: 0,
      copp_xfer: 0,
      recipient_id: null,
    });
  };

  render() {
    let { platTemp, goldTemp, elecTemp, silvTemp, coppTemp } = this.state;
    let { plat_xfer, gold_xfer, elec_xfer, silv_xfer, copp_xfer } = this.state;
    return (
      <div>
        <>
          {this.state.characterName === null ? null : (
            <>
              <h3>{this.state.characterName}'s Wallet</h3>
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
                  <h4>Money Transfers</h4>
                  <h4>Campaign: {this.state.campaignName}</h4>
                  {!Array.isArray(this.state.campaignMates) ||
                  !this.state.campaignMates.length ? null : (
                    <div className="coin-counter-holder">
                      <form action="">
                        <div className="coin-counters">
                          <CoinCounter
                            increment={this.increasePlatinumTransfer}
                            decrement={this.decreasePlatinumTransfer}
                            incrementTen={this.increaseTenPlatinumTransfer}
                            decrementTen={this.decreaseTenPlatinumTransfer}
                            value={plat_xfer}
                            theme="Platinum"
                          />
                          <CoinCounter
                            increment={this.increaseGoldTransfer}
                            decrement={this.decreaseGoldTransfer}
                            incrementTen={this.increaseTenGoldTransfer}
                            decrementTen={this.decreaseTenGoldTransfer}
                            value={gold_xfer}
                            theme="Gold"
                          />
                          <CoinCounter
                            increment={this.increaseElectrumTransfer}
                            decrement={this.decreaseElectrumTransfer}
                            incrementTen={this.increaseTenElectrumTransfer}
                            decrementTen={this.decreaseTenElectrumTransfer}
                            value={elec_xfer}
                            theme="Electrum"
                          />
                          <CoinCounter
                            increment={this.increaseSilverTransfer}
                            decrement={this.decreaseSilverTransfer}
                            incrementTen={this.increaseTenSilverTransfer}
                            decrementTen={this.decreaseTenSilverTransfer}
                            value={silv_xfer}
                            theme="Silver"
                          />
                          <CoinCounter
                            increment={this.increaseCopperTransfer}
                            decrement={this.decreaseSCopperransfer}
                            incrementTen={this.increaseTenCopperTransfer}
                            decrementTen={this.decreaseTenCopperTransfer}
                            value={copp_xfer}
                            theme="Copper"
                          />
                        </div>
                        <select
                          defaultValue={null}
                          name="recipient_id"
                          onChange={this.handleRecipientChange}
                        >
                          <option key="0" value={null}>
                            Please Select a Recipient
                          </option>
                          {this.state.campaignMates.map((character, id) => (
                            <option key={id + 1} value={parseInt(character.id)}>
                              {character.name}
                            </option>
                          ))}
                        </select>
                        {this.state.recipient_id === null ||
                        isNaN(this.state.recipient_id) ? null : (
                          <div className="coin-transfer-button-div">
                            <button
                              className="coin-transfer-button-revert"
                              onClick={this.revertTransferCoins}
                            >
                              Revert
                            </button>
                            <button
                              className="coin-transfer-button-submit"
                              onClick={this.submitTransferCoins}
                            >
                              Send Coins
                            </button>
                          </div>
                        )}
                      </form>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </>
      </div>
    );
  }
}
