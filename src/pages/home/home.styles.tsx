import styled from "styled-components"

export const ContainerRange = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .span {
    margin-left: 10px;
  }
`

export const Button = styled.button`
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--violet11);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
`

export const ButtonOutline = styled.button`
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  color: var(--violet11);
  font-size: 15px;
  font-weight: 600;
  border: 1px solid var(--violet11);
`

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .AvatarRoot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: var(--blackA3);
  }

  .AvatarImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`

export const ConfigCard = styled.div`
  color: #000;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  position: fixed;
  top: 10%;
  left: 2%;
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    position: relative;
    margin-bottom: 30px;
  }

  h1 {
    color: #000;
    margin-bottom: 20px;
  }

  .CheckboxRoot {
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px var(--blackA7);
  }
  .CheckboxRoot:hover {
    background-color: var(--violet3);
  }
  .CheckboxRoot:focus {
    box-shadow: 0 0 0 2px black;
  }

  .CheckboxIndicator {
    color: var(--violet11);
  }

  .Label {
    color: #000;
    padding-left: 15px;
    font-size: 15px;
    line-height: 1;
    user-select: none;
  }
  /* slider */

  .SliderRoot {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 200px;
  }
  .SliderRoot[data-orientation="horizontal"] {
    height: 20px;
  }
  .SliderRoot[data-orientation="vertical"] {
    flex-direction: column;
    width: 20px;
    height: 100px;
  }

  .SliderTrack {
    background-color: var(--violet8);
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
  }
  .SliderTrack[data-orientation="horizontal"] {
    height: 3px;
  }
  .SliderTrack[data-orientation="vertical"] {
    width: 3px;
  }

  .SliderRange {
    position: absolute;
    background-color: var(--violet11);
    border-radius: 9999px;
    height: 100%;
  }

  .SliderThumb {
    display: block;
    width: 20px;
    height: 20px;
    background-color: var(--violet11);
    box-shadow: 0 2px 10px var(--blackA7);
    border-radius: 10px;
  }
  .SliderThumb:hover {
    background-color: var(--violet3);
  }
  .SliderThumb:focus {
    outline: none;
    box-shadow: 0 0 0 5px var(--blackA8);
  }
`
