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
                    <div id="btn-container" class="btn-container">
                        <button id="baten" class="btn">Ya, saya setuju</button>
                        <button id="baten" class="btn">Ya, saya setuju</button>
                    
                    </div>
                    
             </div>`;

    $("#ques-container").append(html);

    //
    $("#baten").click(function () {
      $(".hcontainer").empty();

      html = "";
      html += `<div class="icontainer">
                    <div class="rules">
                        <p class="p-1">
                            Jawab pertanyaan berikut berdasarkan seberapa sering kamu mengalami situasi tersebut dalam kurun waktu 4
                            minggu terakhir.
                        </p>

                        <p class="p-2">Pilih jawaban yang paling menggambarkan diri kamu, karena <small> tidak ada jawaban yang
                                benar dan
                                salah</small></p>
                    </div>
                    <div id="btn-rules" class="btn-rules">
                        <button id="back" href="">Kembali</button>
                        <button id="next" href="">Lanjut</button>
                    </div>
                 </div>`;
      $(".hcontainer").append(html);

      $("#next").click(function () {
        $(".icontainer").empty();
        html = "";
        html += `<div class="pcontainer">
          <div class="pertanyaan1">
              <h3>Pertanyaan
              </h3>
              <p>
                  Dalam 4 minggu terakhir, seberapa sering Anda tiba-tiba merasa lelah?
              </p>
          </div>
          <div id="btn-pertanyaan" class="btn-pertanyaan">
              <button class="btn">Tidak Pernah</button>
              <button class="btn">Jarang</button>
              <button class="btn">Kadang-Kadang</button>
              <button class="btn">Sering</button>
              <button class="btn">Selalu</button>
          </div>
      </div>`;
        $(".icontainer").append(html);
      });
    });
  });
});
