<?php

class TextInput
{
    protected $text;

    public function add($text)
    {
        $this->text = $this->text . $text;
    }

    public function getValue()
    {
        return $this->text;
    }
}

class NumericInput extends TextInput
{
    public function add($text)
    {
        if (is_numeric($text)) {
            $this->text = $this->text . $text;
        }
    }
}

$awd = new TextInput();
$awd->add('1');
$awd->add('a');
$awd->add('0');
echo $awd->getValue();

$input = new NumericInput();
$input->add('1');
$input->add('a');
$input->add('0');
echo $input->getValue();