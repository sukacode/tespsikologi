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
                        <button id="baten" class="btn">Tidak, saya tidak setuju</button>
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
        html += `
        <div class="content">
        <div class="bar">
            <a href=""></a>
            <a1 href=""></a1>
            <a1 href=""></a1>
            <a1 href=""></a1>
            <a1 href=""></a1>
            <a1 href=""></a1>
            <a1 href=""></a1>
            <a1 href=""></a1>
            <a1 href=""></a1>
            <a1 href=""></a1>
        </div>

        <div class="pcontainer">
            <div class="pertanyaan1">

                <h3>Pertanyaan
                </h3>
                <p>
                    Dalam 4 minggu terakhir, seberapa sering Anda tiba-tiba merasa lelah?
                </p>
            </div>
            <div id="baten" class="btn-pertanyaan">
                <button class="btn">Tidak Pernah</button>
                <button class="btn">Jarang</button>
                <button class="btn">Kadang-Kadang</button>
                <button class="btn">Sering</button>
                <button class="btn">Selalu</button>
                <p style="font-size:smaller;">
                1 dari 11
                </p>
            </div>
            
        </div>
    </div>`;
        $(".icontainer").append(html);

        $("#baten").click(function () {
          $(".content").empty();
          html = "";
          html += `<div class="content2">
            <div class="bar">
                <a href=""></a>
                <a href=""></a>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
            </div>
    
            <div class="pcontainer">
                <div class="pertanyaan1">
    
                    <h3>Pertanyaan
                    </h3>
                    <p>
                        Dalam 4 minggu terakhir, <span style="font-weight:bold;">seberapa sering Anda merasa cemas?</span>
                    </p>
                </div>
                <div id="baten" class="btn-pertanyaan">
                    <button class="btn">Tidak Pernah</button>
                    <button class="btn">Jarang</button>
                    <button class="btn">Kadang-Kadang</button>
                    <button class="btn">Sering</button>
                    <button class="btn">Selalu</button>
                    <p style="font-size:smaller;">
                2 dari 11
                </p>
                </div>
            </div>
        </div>`;
          $(".content").append(html);

          $("#baten").click(function () {
            $(".content2").empty();
            html = "";
            html += `<div class="content3">
            <div class="bar">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
                <a1 href=""></a1>
            </div>
    
            <div class="pcontainer">
                <div class="pertanyaan1">
    
                    <h3>Pertanyaan
                    </h3>
                    <p>
                        Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa cemas sampai tidak bisa menenangkan diri sendiri meskipun ada bantuan?</span>
                    </p>
                </div>
                <div id="baten" class="btn-pertanyaan">
                    <button class="btn">Tidak Pernah</button>
                    <button class="btn">Jarang</button>
                    <button class="btn">Kadang-Kadang</button>
                    <button class="btn">Sering</button>
                    <button class="btn">Selalu</button>

                    <p style="font-size:smaller;">
                3 dari 11
                </p>
                </div>
            </div>
        </div>`;
            $(".content2").append(html);

            $("#baten").click(function () {
              $(".content3").empty();
              html = "";
              html += `<div class="content4">
                <div class="bar">
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a1 href=""></a1>
                    <a1 href=""></a1>
                    <a1 href=""></a1>
                    <a1 href=""></a1>
                    <a1 href=""></a1>
                    <a1 href=""></a1>
                </div>
        
                <div class="pcontainer">
                    <div class="pertanyaan1">
        
                        <h3>Pertanyaan
                        </h3>
                        <p>
                            Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa putus asa?</span>
                        </p>
                    </div>
                    <div id="baten" class="btn-pertanyaan">
                        <button class="btn">Tidak Pernah</button>
                        <button class="btn">Jarang</button>
                        <button class="btn">Kadang-Kadang</button>
                        <button class="btn">Sering</button>
                        <button class="btn">Selalu</button>

                        <p style="font-size:smaller;">
                4 dari 11
                </p>
                    </div>
                </div>
            </div>`;
              $(".content3").append(html);

              $("#baten").click(function () {
                $(".content4").empty();
                html = "";
                html += `<div class="content5">
                      <div class="bar">
                          <a href=""></a>
                          <a href=""></a>
                          <a href=""></a>
                          <a href=""></a>
                          <a href=""></a>
                          <a1 href=""></a1>
                          <a1 href=""></a1>
                          <a1 href=""></a1>
                          <a1 href=""></a1>
                          <a1 href=""></a1>
                      </div>
              
                      <div class="pcontainer">
                          <div class="pertanyaan1">
              
                              <h3>Pertanyaan
                              </h3>
                              <p>
                                  Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa gelisah atau tidak tenang?</span>
                              </p>
                          </div>
                          <div id="baten" class="btn-pertanyaan">
                              <button class="btn">Tidak Pernah</button>
                              <button class="btn">Jarang</button>
                              <button class="btn">Kadang-Kadang</button>
                              <button class="btn">Sering</button>
                              <button class="btn">Selalu</button>

                              <p style="font-size:smaller;">
                                5 dari 11
                              </p>
                          </div>
                      </div>
                  </div>`;
                $(".content4").append(html);

                $("#baten").click(function () {
                  $(".content5").empty();
                  html = "";
                  html += `<div class="content6">
                          <div class="bar">
                              <a href=""></a>
                              <a href=""></a>
                              <a href=""></a>
                              <a href=""></a>
                              <a href=""></a>
                              <a1 href=""></a1>
                              <a1 href=""></a1>
                              <a1 href=""></a1>
                              <a1 href=""></a1>
                              <a1 href=""></a1>
                          </div>
                  
                          <div class="pcontainer">
                              <div class="pertanyaan1">
                  
                                  <h3>Pertanyaan
                                  </h3>
                                  <p>
                                      Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa sangat gelisah sampai Anda tidak bisa tidur dengan tenang?</span>
                                  </p>
                              </div>
                              <div id="baten" class="btn-pertanyaan">
                                  <button class="btn">Tidak Pernah</button>
                                  <button class="btn">Jarang</button>
                                  <button class="btn">Kadang-Kadang</button>
                                  <button class="btn">Sering</button>
                                  <button class="btn">Selalu</button>

                                  <p style="font-size:smaller;">
                                6 dari 11
                              </p>
                              </div>
                          </div>
                      </div>`;
                  $(".content5").append(html);

                  $("#baten").click(function () {
                    $(".content6").empty();
                    html = "";
                    html += `<div class="content7">
                                <div class="bar">
                                    <a href=""></a>
                                    <a href=""></a>
                                    <a href=""></a>
                                    <a href=""></a>
                                    <a href=""></a>
                                    <a href=""></a>
                                    <a1 href=""></a1>
                                    <a1 href=""></a1>
                                    <a1 href=""></a1>
                                    <a1 href=""></a1>
                                </div>
                        
                                <div class="pcontainer">
                                    <div class="pertanyaan1">
                        
                                        <h3>Pertanyaan
                                        </h3>
                                        <p>
                                            Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa depresi/sedih yang mendalam?</span>
                                        </p>
                                    </div>
                                    <div id="baten" class="btn-pertanyaan">
                                        <button class="btn">Tidak Pernah</button>
                                        <button class="btn">Jarang</button>
                                        <button class="btn">Kadang-Kadang</button>
                                        <button class="btn">Sering</button>
                                        <button class="btn">Selalu</button>

                                        <p style="font-size:smaller;">
                                7 dari 11
                              </p>
                                    </div>
                                </div>
                            </div>`;
                    $(".content6").append(html);

                    $("#baten").click(function () {
                      $(".content7").empty();
                      html = "";
                      html += `<div class="content8">
                                    <div class="bar">
                                        <a href=""></a>
                                        <a href=""></a>
                                        <a href=""></a>
                                        <a href=""></a>
                                        <a href=""></a>
                                        <a href=""></a>
                                        <a href=""></a>
                                        <a1 href=""></a1>
                                        <a1 href=""></a1>
                                        <a1 href=""></a1>
                                    </div>
                            
                                    <div class="pcontainer">
                                        <div class="pertanyaan1">
                            
                                            <h3>Pertanyaan
                                            </h3>
                                            <p>
                                                Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa sulit melakukan sesuatu yang biasanya mudah dilakukan?</span>
                                            </p>
                                        </div>
                                        <div id="baten" class="btn-pertanyaan">
                                            <button class="btn">Tidak Pernah</button>
                                            <button class="btn">Jarang</button>
                                            <button class="btn">Kadang-Kadang</button>
                                            <button class="btn">Sering</button>
                                            <button class="btn">Selalu</button>

                                            <p style="font-size:smaller;">
                                8 dari 11
                              </p>
                                        </div>
                                    </div>
                                </div>`;
                      $(".content7").append(html);

                      $("#baten").click(function () {
                        $(".content8").empty();
                        html = "";
                        html += `<div class="content9">
                                          <div class="bar">
                                              <a href=""></a>
                                              <a href=""></a>
                                              <a href=""></a>
                                              <a href=""></a>
                                              <a href=""></a>
                                              <a href=""></a>
                                              <a href=""></a>
                                              <a href=""></a>
                                              <a1 href=""></a1>
                                              <a1 href=""></a1>
                                          </div>
                                  
                                          <div class="pcontainer">
                                              <div class="pertanyaan1">
                                  
                                                  <h3>Pertanyaan
                                                  </h3>
                                                  <p>
                                                      Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa sangat sedih sampai tidak ada yang dapat membuat kamu terhibur?</span>
                                                  </p>
                                              </div>
                                              <div id="baten" class="btn-pertanyaan">
                                                  <button class="btn">Tidak Pernah</button>
                                                  <button class="btn">Jarang</button>
                                                  <button class="btn">Kadang-Kadang</button>
                                                  <button class="btn">Sering</button>
                                                  <button class="btn">Selalu</button>

                                                  <p style="font-size:smaller;">
                                9 dari 11
                              </p>
                                              </div>
                                          </div>
                                      </div>`;
                        $(".content8").append(html);

                        $("#baten").click(function () {
                          $(".content9").empty();
                          html = "";
                          html += `<div class="content10">
                                              <div class="bar">
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a href=""></a>
                                                  <a1 href=""></a1>
                                              </div>
                                      
                                              <div class="pcontainer">
                                                  <div class="pertanyaan1">
                                      
                                                      <h3>Pertanyaan
                                                      </h3>
                                                      <p>
                                                          Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa tidak berharga?</span>
                                                      </p>
                                                  </div>
                                                  <div id="baten" class="btn-pertanyaan">
                                                      <button class="btn">Tidak Pernah</button>
                                                      <button class="btn">Jarang</button>
                                                      <button class="btn">Kadang-Kadang</button>
                                                      <button class="btn">Sering</button>
                                                      <button class="btn">Selalu</button>

                                                      <p style="font-size:smaller;">
                                10 dari 11
                              </p>
                                                  </div>
                                              </div>
                                          </div>`;
                          $(".content9").append(html);

                          $("#baten").click(function () {
                            $(".content10").empty();
                            html = "";
                            html += `<div class="content11">
                                                    <div class="bar">
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                        <a href=""></a>
                                                    </div>
                                            
                                                    <div class="pcontainer">
                                                        <div class="pertanyaan1">
                                            
                                                            <h3>Pertanyaan
                                                            </h3>
                                                            <p>
                                                                Dalam 4 minggu terakhir, seberapa sering <span style="font-weight:bold;">Anda merasa tidak mampu menangani masalahmu sendiri?</span>
                                                            </p>
                                                        </div>
                                                        <div id="baten" class="btn-pertanyaan">
                                                            <button class="btn">Tidak Pernah</button>
                                                            <button class="btn">Jarang</button>
                                                            <button class="btn">Kadang-Kadang</button>
                                                            <button class="btn">Sering</button>
                                                            <button class="btn">Selalu</button>

                                                            <p style="font-size:smaller;">
                                11 dari 11
                              </p>
                                                        </div>
                                                    </div>
                                                </div>`;
                            $(".content10").append(html);
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
