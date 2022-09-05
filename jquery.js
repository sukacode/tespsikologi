// A $( document ).ready() block.
$(document).ready(function () {
  $("#btn-mulai").click(function () {
    html = "";
    $("#ques-container").empty();
    html += `<div class="hcontainer">
                    <div class="warning">
                        <p>1. Test ini TIDAK ditujukan untuk mendiagnosis gangguan psikologis, namun untuk membantu mengenali
                            gambaran
                            dirimu saat ini
                        </p>
                        <p>
                            2. Apabila kamu mengalami gejala yang mengganggu, segeralah berkonsultasi ke psikolog/psikiater
                            untuk
                            mendapatkan penanganan yang tepat.
                        </p>
                    </div>
                    
    </div>
    <div class="btn-container">
        <button class="btn" id="setuju">Ya, saya setuju</button>
        <button class="btn" id="tidak-setuju">Tidak, saya tidak setuju</button>
    </div>
        `;
    $("#ques-container").append(html);
  });
  $("#setuju").click(function () {
    html = "";
    $("#hcontainer").empty();
  });
});
